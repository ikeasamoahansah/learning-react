import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function Button(props) {
//   const buttonStyle = {
//     color: props.color,
//     fontSize: props.fontSize + 'px',
//     handleClick: props.handleClick
//   };

//   return (
//     <button onClick={props.handleClick} style={buttonStyle}>{props.text}</button>
//   )
// }

const COLORS = ["green", "pink", "blue", "white", "black", "grey"]

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0])
  // const animals = ["Cow", "Goat", "Sheep", "Pig"];

  // const handleButtonClick = () => {
  //   window.location.href = 'http://www.google.com';
  // };

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  }

  return (
      <div
      className='App'
      style={{backgroundColor}}
      >
        {/* <h1>Props: </h1>
        <Button text="Don't click me" color="red" fontSize={12} handleClick={handleButtonClick} />
        <Button text="Click Me" color="green" fontSize={12} /> */}

        {COLORS.map((color) => (
          <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? 'selcted': ''}
          >
            {color}
          </button>
        ))}
      </div>
  )
}

export default App
