import React from 'react'

import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import teamData from './team-data'



function App() {

  let cards = (teamData.map((el) => <Card {...el} key={el.name} toggleParentPadding={togglePadding} />))

  let [cardsContainer, setCardsContainer] = React.useState(cards)
  const [classNames, setClassNames] = React.useState("cards-container")
  function togglePadding() {
    if (classNames === "cards-container") {
      setClassNames("cards-container decrease-padding")
    }
    else {
      setClassNames("cards-container")
    }
  }
  var flag = window.matchMedia("(max-width: 549px)").matches;
  return (
    <>
      <Header />
      <main><div className={classNames} >
        {cards}
      </div></main></>
  )
}

export default App
