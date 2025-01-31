import styled, { keyframes } from "styled-components";
import GlowingBorder from "./GlowingBorder";
const getGlowingAnimation = (color) => keyframes`
    0% {
        filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0))drop-shadow(0 0 5px rgba(255, 255, 255, 0) )  drop-shadow(0 0 15px  rgba(255, 255, 255, 0));
    }
    100% {
        filter: drop-shadow(0 0 5px #ffffff) drop-shadow(0 0 5px ${color}) drop-shadow(0 0 15px ${color});
    }
`;


const TechnologyCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-radius:10px;
    position: relative;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.4);
    width:410px;
    max-width: 80%;
    padding: 20px 0px;
    color: ${props => props.darkMode ? 'var(--text-color-level-2)' : 'var(--text-color-level-4)'};
    transform: scale(${props => props.big ? 1.1 : 1});
    cursor:default;

    .title{
        font-size: 24px;
        font-weight: 700;
        width:100%;
        box-sizing:border-box;
        text-align:center;
        border-radius:inherit;
    }
    .technologies{
        padding: 0px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        position: relative;
        z-index:103;
    }
    @media (max-width:650px) {
        .title{
            font-size:20px;
        }
        .technologies
        {
            gap:15px;
        }
    }
`

const Technology = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding:10px 0px;
    position:relative;
    transition:0.4s;
    z-index:100;
    &::before{
        content: "${props => props.description}";
        padding:5px;
        border-radius:10px;
        width:150px;
        font-size:12px;
        position: absolute;
        top: 0px;
        translate: 0 -100%;
        background: #291b14;
        color:white;
        opacity:0;
        pointer-events:none;
        transition: 0.4s;
        z-index:101;
    }
    &:hover::before{
        opacity:1;
        pointer-events:all;
    }
    &:hover{
        transform:scale(1.1)
    }
    img{
        width: 50px;
        height: 50px;
        object-fit: contain;
    }
    span{
        font-size: 16px;
        font-weight: 600;
    }   
    *{
        transition:0.3s;
        animation: ${(props) => getGlowingAnimation(props.glowingColor)} 2s infinite alternate ease-out;

    }

    @media (max-width:650px) {  
        img{
            width: 40px;
            height: 40px;
        }
        span{
            font-size: 14px;
        }  
    }
`
export default function TechnologyCard(props) {
    return (
        <TechnologyCardContainer big={props.big} darkMode={props.darkMode}>
            <span className="title"> {props.title}</span>
            <div className="technologies">
                {props.technologies.map((technology, index) => (
                    <Technology
                        glowingColor={technology.glowingColor}
                        key={index}
                        description={technology.description} ><img src={technology.image} />
                        <span>{technology.name}</span> </Technology>))}
            </div>
            <GlowingBorder firstColor={props.darkMode ? "#0000003c" : "#e7be81"} secondColor={props.darkMode ? "#6a300039" : "#fff2be"} />{/*  */}
        </TechnologyCardContainer>
    )
}




















