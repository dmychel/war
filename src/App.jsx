import { useEffect } from 'react';
import './App.css'
import { playerOne, playerTwo } from '/src/functions/players.js'
import { initiateCardLogic } from './functions/cardLogic'

function App() {

  useEffect(() => {
    initiateCardLogic();
    console.log('running on load')
  }, [])

  return (
    <>
      <h1>Hello World</h1>
      <div>
        <p>{playerOne.name} has {playerOne.cards.length} cards remaning</p>
      </div>
      <div>{playerTwo.name} has {playerTwo.cards.length} cards remaining</div>
    </>
  )
}

export default App
