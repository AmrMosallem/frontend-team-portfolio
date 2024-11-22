import React from 'react'

import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import teamData from './team-data'



function App() {

  let cards = (teamData.map((el) => <Card {...el} key={el.name} />))
  var media = window.matchMedia(`(min-width: ${cards.length * 185 + 100}px)`)
  var [flag, setFlag] = React.useState();
  media.addEventListener("change", () => {
    if (media.matches) {
      setFlag(true)
    } else {
      setFlag(false)
    }
  })

  return (
    <>
      <Header />
      <main>
        {flag ? <div className="cards-container " > {cards}</div> : (
          <>  <div className="cards-container" >{cards.slice(0, cards.length / 2)}</div>
            <div className="cards-container" >{cards.slice(cards.length / 2)}</div>
          </>
        )}
      </main></>
  )
}

export default App
