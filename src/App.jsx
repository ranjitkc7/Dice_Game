import React, { useState } from 'react'
import StartGame from './Components/StartGame'
import PlayGame from './Components/PlayGame';

const App = () => {
  const[display, setDisplay] = useState(true);
 
  const chandeDisplay = () => {
    setDisplay((prevDisplay) => !prevDisplay);
  }

  return (
    <div>
     {
      display ? <StartGame toggle = {chandeDisplay}/> :  <PlayGame/> 
     }
    </div>
  )
}

export default App