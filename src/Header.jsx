import React from 'react'
import styled from 'styled-components'
import DarkModeSwitch from './components/DarkModeSwitch'
import Burger from './components/burger'


const HeaderContainer = styled.div`
  color: ${props => props.darkMode ? 'var(--text-color-level-2)' : 'var(--text-color-level-5)'} ;
   background: rgba(  ${props => props.darkMode ? '00,00,00' : '255, 249, 243'}, ${props => props.opacity});
  /* background-color: var(--color-level-2); */
  font-family: "Nunito Sans", system-ui;
  box-sizing: border-box;
  width: ${props => props.width + "%"};
  padding: 15px 20px;
  backdrop-filter: blur(5px);
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position:fixed;
  top: 0;
  left: 50%;
  translate: -50% 0;
  z-index:100;
  transition: 1s;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  .header-sections{
    display: flex;
    align-items: center;
    gap: 10px;
  }
  a{
    text-decoration: none;
    color: ${props => props.darkMode ? 'var(--text-color-level-1)' : 'var(--text-color-level-5)'} ;
    margin-right: 10px;
    font-size:16px;
    font-weight:400;
    position: relative;
  }
   a::before{
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -5px;
    left: 0;
    transition: 0.3s;
    background-color:    ${props => props.darkMode ? 'var(--text-color-level-1)' : 'var(--text-color-level-5)'};
  }
   a:hover::before{
    width: 100%;
  }
  .header-title{
  display: flex;
  align-items: center;
  gap: 10px;  font-size: 24px;
  }
  .header-title img{
  width: 40px;
  border-radius: 10px;
  filter: brightness(2.5);
  mix-blend-mode: lighten;
  }


  .mobile-menu{
    position:absolute;
    right: 10px;
    top:50px;
    padding:10px 20px;
    background: ${props => props.darkMode ?'rgba(91, 61, 44, 0.7)': 'rgba(255, 255, 255, 0.7)'};
    color: ${props => props.darkMode ?'white': 'black'};
    display:flex;
    flex-direction:column;
    gap:10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    opacity:0;
    pointer-events:none;
    transition: 0.5s;
    z-index:101;
    border-radius:5px;
    a{
      font-size:16px;
    }
  }
  .mobile-menu.open{
    opacity:1;
    pointer-events:all;
  }

  @media (max-width:720px) {
    .header-title{
      font-size:22px;
    }
    .header-link{
      display:none;
    }
    padding: 10px 20px; 
    padding-right:5px; 
    }
`

export default function Header(props) {
  const [opacity, setOpacity] = React.useState(0);
  const [width, setWidth] = React.useState(100);
  const [burgerOpened, setBurgerOpened] = React.useState(true);
  function toggleBurger() {
    setBurgerOpened(!burgerOpened);
  }
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const homeHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const scrollFraction = Math.min(scrollY / homeHeight, 1);
      const newWidth = 100 - 5 * scrollFraction;
      const newOpacity = scrollFraction * 0.2;
      setOpacity(newOpacity);
      setWidth(newWidth);
    });
  }, []);


  return (
    <HeaderContainer opacity={opacity} width={width} darkMode={props.darkMode} >
      <span className="header-title">
        Pixelists
      </span>
      <div className="header-sections">
        {props.mobileScreen ? ""
          : ["Home", "About Us", "Projects", "Members", "Technologies", "Contact"].map((item) => {
            return (<a className="header-link" href={"#" + item.split(" ").join("-").toLowerCase()}>{item}</a>)
          })
        }

        <DarkModeSwitch setDarkMode={props.setDarkMode} />
        {props.mobileScreen ? (<>
          <Burger toggleBurger={toggleBurger} burgerOpened={burgerOpened} darkMode={props.darkMode} />
          <div className={burgerOpened ? "mobile-menu" : "mobile-menu open"}  >
            {["Home", "About Us", "Projects", "Members", "Technologies", "Contact"].map(
              item => <a onClick={toggleBurger} href={"#" + item.split(" ").join("-").toLowerCase()}>{item}</a>)
            }
          </div>
        </>) : ""}
      </div>
    </HeaderContainer>

  )
}