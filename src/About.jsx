import styled from "styled-components"
import { motion } from "framer-motion";
import React from "react";
import { SectionTitle } from "./components/SharedComponents";
import { moatasemShaped } from "./assets/images";


const AboutSection = styled.section`
    font-family: "Nunito Sans", system-ui;
    box-sizing: border-box;
    min-height: 100dvh;
    display:flex;
    gap:30px;
    padding-right:50px;
    font-size: 18px;
    .main-text-section{
        display:flex;
        flex-direction:column;
        gap:0px;
        align-self:center;
        flex:4;
    .main-text, .quote{
        font-size: 18px;
        font-weight: 300;
        line-height: 1.6;
    }
    .quote{
        font-style: italic;
        margin-top: 20px;
    }
    }
    .section-img{
       width:100%;
       object-fit:contain;
    }

    @media (max-width:650px) {
        padding:0px;
        flex-direction:column;
        flex-flow:column-reverse;
        .main-text-section{
            .main-text, .quote{
                font-size: 14px;
                font-weight: 300;
                line-height: 1.6;     padding:0px 20px;
                }   
             .quote{
         
                margin-top: 10px;
            }
        }
    }

`


export default function About(props) {

    return (
        <AboutSection id="about-us" darkMode={props.darkMode}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, amount: 0.1 }} // Animate once, with 10% visibility threshold
                style={{
                    alignSelf: "center",
                    flex: 3,
                }}
            >
                <img src={moatasemShaped} className={`section-img`} />
            </motion.div>
            <div className="main-text-section">
                <SectionTitle size={"64px"}>About Us <span className="section-subtitle">Passion Meets Precision in Every Line of Code.</span></SectionTitle>
                <span className="main-text">
                    At the heart of our team is a shared journey—a group of passionate individuals who started from scratch and grew together into experienced frontend developers.
                    Through structured learning, collaborative projects, and regular discussions,
                    we’ve built not only our skills but also a strong sense of teamwork and discipline.
                    Our team specializes in creating high-quality, visually appealing, and user-friendly interfaces.
                    Some of us excel with React, others with Vue, and some bring the timeless power of JQuery to life.
                    Beyond the frontend, a few members extend their expertise to backend development,
                    giving our team a well-rounded edge.
                    We pride ourselves on our commitment to excellence,
                    adherence to deadlines, and the ability to transform ideas into reality.
                    Every project we undertake reflects our dedication to quality, creativity, and precision.
                    Together, we aim to set new standards in frontend development.
                </span>
                <span className="quote">"For us, it’s not just about coding; it’s about crafting experiences that make a difference."</span></div>
        </AboutSection>
    )
}