import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + 'px',
    handleClick: props.handleClick
  };

  return (
    <button onClick={props.handleClick} style={buttonStyle}>{props.text}</button>
  )
}


function App() {
  const [count, setCount] = useState(0)
  const animals = ["Cow", "Goat", "Sheep", "Pig"];

  const handleButtonClick = () => {
    window.location.href = 'http://www.google.com';
  };

  return (
    <>
      <div>
        <h1>Props: </h1>
        <Button text="Don't click me" color="red" fontSize={12} handleClick={handleButtonClick} />
        <Button text="Click Me" color="green" fontSize={12} />
      </div>
    </>
  )
}

export default App
