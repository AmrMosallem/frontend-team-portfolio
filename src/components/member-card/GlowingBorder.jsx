
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 @property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

@keyframes spin {
  from {
    --angle: 0deg;
  }

  to {
    --angle: 360deg;
  }
}`

const Border = styled.div`

  --angle: 0deg;

  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  translate: -50% -50%;

  background-image: conic-gradient(
    from var(--angle),
    ${props => props.firstColor ? props.firstColor : "#ff8800"},
    ${props => props.secondColor ? props.secondColor : "#ffff00"},
    ${props => props.firstColor ? props.firstColor : "#ff8800"}
  );
  padding: 1.5px;
  border-radius: inherit;
  z-index: -1;
  animation: spin infinite 4s linear;
  transition: 0.4s ease-in-out;
`

const BlurredBorder = styled(Border)`
  filter: blur(4px);
  opacity: 1;
`

const GlowingBorder = (props) => {
    return (
  
        <Border className="border" firstColor={props.firstColor} secondColor={props.secondColor}>
        <GlobalStyle />
            <BlurredBorder className="border blurred" firstColor={props.firstColor} secondColor={props.secondColor}>
            </BlurredBorder>
        </Border>
    
    )

}

export default GlowingBorder