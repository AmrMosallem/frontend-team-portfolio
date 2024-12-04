import { useState } from "react";
import { SectionTitle } from "./components/SharedComponents";
import styled from "styled-components";
import { messagesCollection } from "./firebase";
import { addDoc, serverTimestamp } from "firebase/firestore";


const ContactSection = styled.section`
    padding: 30px 20px;
    margin: 0px auto;
    display:flex;
    flex-direction:column;
    align-items:center;

    form{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:5px;
        label{
            align-self:flex-start;
        }
        input,textarea{
            padding: 8px 10px;
            width:100%;
            max-width:600px;
            box-sizing:border-box;
            margin-bottom:20px;
            resize:none;
            background: ${props => props.darkMode ? 'var(--color-level-0)' : 'rgba(255, 136, 0, 0.2)'};
            border:none;
            outline:none;
            font-size:16px;
            transition: 1s;
        }

        .note{
            max-width:600px;
            margin-bottom:10px;
        }
        textarea{
            height:100px;
            margin-bottom:10px;
        }
        button{
            color:${props => props.darkMode ? 'var(--text-color-level-5)' : 'var(--text-color-level-1)'} ; 
            font-size: 20px;
            font-weight: 700;
            background: ${props => props.darkMode ? 'var(--color-level-0)' : 'rgba(0,0,0,0.8)'};
            padding:12px 25px;
            border-radius: 30px;
            transition: 0.3s;
            cursor: pointer;
            border:none;
            outline:none;
            align-self:center;
            &:hover{
                background: ${props => props.darkMode ? 'var(--color-level-2)' : 'rgba( 0, 0, 0, 0.6)'};
            }
        }
        .message-status{
            height:25px;
        }
        @media (max-width:650px) {
            button{
                font-size: 18px;
                padding:12px 25px; 
            }
        }
    }
    .last-note{
        margin-top:30px;
        padding: 0px 20px;
        font-size: 28px;
        text-align:center;
    }
    
`



export default function Contact(props) {

    const [message, setMessage] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [submitError, setSubmitError] = useState("");
    function handleChange(event) {
        const { id, value } = event.target;
        setMessage({ ...message, [id]: value });
    }
    async function saveMessage(event) {
        if (!message.name || !message.email || !message.message) {
            setSubmitError("Please fill in all the fields.");
            return;
        }
        event.preventDefault();
        await addDoc(messagesCollection, {
            name: message.name,
            email: message.email,
            content: message.message,
            date: serverTimestamp() // Automatically sets the current date and time
        });
        setSubmitError("Your message has been sent. Thank you!");

    }

    return (
        <ContactSection id="contact" darkMode={props.darkMode}>
            <SectionTitle center={true}>
                Contact Us
                <span className="section-subtitle">Have a project in mind? Get in touch with us, and let’s bring your ideas to life!</span>
            </SectionTitle>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={message.name} onChange={handleChange} required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={message.email} onChange={handleChange} required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" value={message.message} onChange={handleChange} required></textarea>
                <span className="note">Note: This feature is fully operational, ensuring your message reaches us directly. Don’t hesitate to get in touch, we’d love to hear from you!</span>
                <button type="submit" onClick={saveMessage} >Submit</button>
                <p className="message-status">{submitError}</p>
            </form>
            <span className="last-note">Your dream project starts with a message, let’s make it happen!</span>
        </ContactSection>
    )
}