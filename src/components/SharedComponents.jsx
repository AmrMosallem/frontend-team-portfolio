import styled from "styled-components";


const SectionTitle = styled.h1`

    font-family: "Nunito Sans", system-ui;
    box-sizing: border-box;
    width: 100%;
    font-size: ${props => props.size ? props.size : "56px"};
    text-align: ${props => props.center ? 'center' : 'left'};
    font-weight: 700;
    margin-bottom: 10px;
    margin-top: 0px;
    display:flex;
    flex-direction:column;
 
    .section-subtitle{
        font-size: 24px;
        font-weight: 400;
    }
    @media (max-width:650px) {
      padding:0px 20px;
      text-align: center;
        font-size: 36px;
        .section-subtitle{
        font-size: 16px;
        font-weight: 400;
    }
    }

`
const ScrollableContainer = styled.div`
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,195,126,0.5) 0%, rgba(254,213,164,1) 0%, rgba(177,148,114,1) 78%);
  border: 2px solid white;
  border-radius: 20px;
  margin: 20px auto;
  box-shadow: 0 0 10px white;
  transition: 0.35s ease-in-out;
  width: 90%;
  box-sizing: border-box;
  overflow-x: scroll;
  &::-webkit-scrollbar{
  height: 6px;
}
&::-webkit-scrollbar-track {
  background: none;
}
&::-webkit-scrollbar-thumb {
  background: var(--color-level-4) ;  
  border-radius: 20px;
}
`
export { SectionTitle, ScrollableContainer }
