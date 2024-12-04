import styled from "styled-components"
import { SectionTitle } from "./components/SharedComponents"
import TechnologyCard from "./components/TechnologyCard"
import { technologiesData } from "./constants"
const TechnologiesSection = styled.section`
    padding: 30px 0px;

    *{
        box-sizing: border-box;
    }
    .technologies-container{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 30px 0px;
        gap: 35px;
        transition: 0.6s;
        min-width: 100%;
        box-sizing: border-box;
    }
    .medium-text{
    margin-top: 10px;
    padding: 0px 20px;
    font-size: 18px;
    text-align: center;}

`

export default function Technologies(props) {
    return (
        <TechnologiesSection id="technologies">
            <SectionTitle center={true}>Technologies<span className="section-subtitle">Crafting Excellence with Cutting-Edge Tools.</span>
            </SectionTitle>
            <div className="technologies-container">
                <TechnologyCard {...technologiesData[0]} darkMode={props.darkMode} big={true} />
            </div>
            <div className="technologies-container">
                {technologiesData.slice(1).map((technology, index) => (
                    <TechnologyCard key={index} {...technology} darkMode={props.darkMode} />
                ))}
            </div>
            <p className="medium-text">We continually explore and master these technologies to ensure we stay ahead in the ever-evolving world of frontend development. Have a favorite tool you’d like us to use? Let’s collaborate!</p>
        </TechnologiesSection>
    )
}