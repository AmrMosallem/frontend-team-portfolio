import styled from "styled-components"
import { SectionTitle } from "./components/SharedComponents"
import { ProjectsSlider } from "./components/ProjectsSlider"


const ProjectsSection = styled.section`
    .contact{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:20px;
        margin: 50px 0px;
        span{
            font-size: 28px;
            font-weight: 400;
        }
        a{
            text-decoration: none;
            color:${props => props.darkMode ? 'var(--text-color-level-5)' : 'var(--text-color-level-1)'} ; 
            font-size: 20px;
            font-weight: 700;
            background: ${props => props.darkMode ? 'var(--color-level-0)' : 'rgba(0,0,0,0.8)'};
            padding:12px 25px;
            border-radius: 30px;
            transition: 0.3s;
            cursor: pointer;
            &:hover{
                background: ${props => props.darkMode ? 'var(--color-level-2)' : 'rgba( 0, 0, 0, 0.6)'};
            }
        }
    }
    @media (max-width:650px) {
        .contact{
            padding:0px 20px;
            span{
                font-size: 20px;
                text-align: center;
            }
            a{
                font-size: 16px;
                padding:9px 15px;
            }
        }
    }
`

export default function Projects(props) {
    return (
        <ProjectsSection id="projects" darkMode={props.darkMode}>
            <SectionTitle center={true}>
                Our Projects
                <span className="section-subtitle">Explore our diverse portfolio of projects that showcase our creativity, technical expertise, and dedication to delivering exceptional results.</span>
            </SectionTitle>

            <ProjectsSlider mobileScreen={props.mobileScreen} />

            <div className="contact">
                <span>Have a project in mind? Let’s bring it to life together!</span>
                <a href="#contact">Contact Us</a>
            </div>
        </ProjectsSection>
    )
}