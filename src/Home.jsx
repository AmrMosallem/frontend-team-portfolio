import styled from "styled-components"
import { team } from "./assets/images"

const HomeSection = styled.section`
    background: ${props => props.darkMode ? 'var(--color-level-4)' : 'var(--color-level-1)'} ;
    min-height: 100dvh;
    box-sizing:border-box;
    transition: background 1s;
    position:relative;
    display:flex;
    justify-content:space-between;

    .main-text-section{
        font-size: 40px;
        font-weight: 400;
        align-self:center;
        padding-left:50px;
        padding-bottom:50px;
        display:flex;
        flex-direction:column;
        gap:30px; 
        .main-title{
        font-size: 64px;  font-weight: 700;    
        }
        *::selection{
            background: var(--text-color-level-5);
            color: var(--color-level-1);
        }
    }

    .section-img{
        width:50%;
        align-self:flex-end;
    }  
    @media (max-width:1200px) {
     
    .main-text-section{
        font-size: 28px;
         .main-title{
                font-size: 48px; 
                font-weight: 700;    
         }
    }
    }
    &::before{
        content:"";
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background: rgb(2,0,36);
        background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(255,255,255,0.3) 0%, rgba(255,195,126,0.25) 72%, rgba(255,162,0,0) 100%);
        pointer-events:none;
   }
   @media (max-width:650px) {
        flex-direction:column;
        align-items:center;
        text-align:center;
        .main-text-section{
            padding:10px 5px;
            font-size: 20px;
            gap:10px;
      
            .main-title{
                font-size: 32px; 
            }
        }
        .section-img{
            width:100%;
            align-self:center;
        }
    }
`




export default function Home(props) {
    return (
        <HomeSection id="home" darkMode={props.darkMode}>
            <div className="main-text-section">
                <span className="main-title">Building the Future of Frontend <u>Excellence.</u></span>
                <span className="sub-title">Discover the Innovation of Pixelists.</span></div>
            <img src={team} className="section-img" onLoad={() => props.setLoading(false)} />
        </HomeSection>
    )
}

