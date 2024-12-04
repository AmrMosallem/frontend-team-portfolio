import React from 'react'
import { createGlobalStyle } from 'styled-components'
import LoadingScreen from './components/LoadingScreen'
import Header from './Header'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Members from './Members'
import Technologies from './Technologies'
import Contact from './Contact'

const GlobalStyle = createGlobalStyle`
:root {
  --text-color-level-1: white;
  --text-color-level-2: rgb(255, 237, 224);
  --text-color-level-3: rgb(195, 195, 195);
  --text-color-level-4: rgb(61, 54, 48);
  --text-color-level-5: rgb(0, 0, 0);
  --color-level-0: rgb(255, 249, 243);
  --color-level-1: rgb(255, 230, 213);
  --color-level-2: rgb(255, 213, 164);
  --color-level-3: rgb(177, 148, 114);
  --color-level-4: rgb(60, 40, 29);
  --color-level-5: #2f2f2f;
  --color-level-max: #000000;
  scroll-behavior: smooth;
}

body {
  background: ${props => props.darkMode ? 'var(--color-level-4)' : 'var(--color-level-0)'} ;
  color: ${props => props.darkMode ? 'var(--text-color-level-2)' : 'var(--text-color-level-5)'};

  margin: 0;
  overflow-y: scroll;
  font-family: "Nunito Sans", system-ui;  
  transition:  ${props => props.loaded ? '1s' : '0s'};

}
*{
  font-family: "Nunito Sans", system-ui;  

}
*::selection{
  background: ${props => props.darkMode ? 'var(--color-level-3)' : 'var( --color-level-4)'};
  color: var(--color-level-1);
}
#root > section{
  padding-top:70px; /* Space for fixed navbar */
  box-sizing: border-box;
  min-height: 100dvh;
}
::-webkit-scrollbar {
  width:${props => props.loaded ? '10px' : '0px'};
}

::-webkit-scrollbar-track {
  background:var(--color-level-1);
}

::-webkit-scrollbar-thumb {
  background: var( --color-level-4);
  border-radius: 24px;
  display: block;
}
@media (max-width:650px) {
  #root > section{
  padding-top:60px; /* Space for fixed navbar */

}
}
`

function App() {
  const [loading, setLoading] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(localStorage.getItem("darkMode") === "true");
  const [mobileScreen, setMobileScreen] = React.useState(false);



  React.useEffect(() => {
    window.onload = () => {
        setLoading(false);
    };
    var x = window.matchMedia("(max-width: 650px)");
    setMobileScreen(x.matches);
    x.addEventListener("change", () => {
      setMobileScreen(x.matches);
    })
  }, [])
  return (
    <>
      <GlobalStyle darkMode={darkMode} loaded={!loading} />
      <LoadingScreen show={loading} darkMode={darkMode} />  {/*  */}
      <Header setDarkMode={setDarkMode} darkMode={darkMode} mobileScreen={mobileScreen} />
      <Home darkMode={darkMode} setLoading = {setLoading} />
      <About />
      <Projects mobileScreen={mobileScreen} darkMode={darkMode} />
      <Members mobileScreen={mobileScreen} />
      <Technologies darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </>
  )
}

export default App
