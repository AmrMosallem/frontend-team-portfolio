
import styled from "styled-components"
import GlowingBorder from "./GlowingBorder"
const ProjectCardContainer = styled.div`
display:flex;
flex-direction:column;
position: relative;
border-radius: 10px;
cursor:pointer;
background:var(--color-level-1);
.project-details{
    padding: 10px;
    display:flex;
    flex-direction:column;
    gap:5px;
    .project-title{
    font-size: 24px;
    font-weight: 700;
}}
.project-img{
    width: 100%;
    object-fit:cover;
    border-radius:inherit;
}

`

export default function ProjectCard(props) {
    return (
        <ProjectCardContainer>
            <video className="project-img" autoPlay muted loop >
                <source src={`/images/${props.video}`} type="video/mp4" />
            </video>
            <div className="project-details">
                <span className="project-title">{props.title}</span>
                <span className="description">
                    {props.description}
                </span></div>
            <GlowingBorder />
        </ProjectCardContainer>
    )

}