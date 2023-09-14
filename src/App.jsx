import { useState } from 'react'
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

// const COLORS = ["green", "pink", "blue", "white", "black", "grey"]

function CustomInput() {
  const [value, setValue] = useState('');

  return (

    <>
    <h1>{value}</h1>
    <input
      placeholder='first name'
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)} />
    </>
  );
}

function App() {
  // const [backgroundColor, setBackgroundColor] = useState(COLORS[0])
  // const animals = ["Cow", "Goat", "Sheep", "Pig"];

  // const handleButtonClick = () => {
  //   window.location.href = 'http://www.google.com';
  // };

  // const onButtonClick = (color) => () => {
  //   setBackgroundColor(color);
  // }

  return (
      <div>
        {/* <h1>Props: </h1>
        <Button text="Don't click me" color="red" fontSize={12} handleClick={handleButtonClick} />
        <Button text="Click Me" color="green" fontSize={12} /> */}

        {/* {COLORS.map((color) => (
          <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? 'selcted': ''}
          >
            {color}
          </button>
        ))} */}
        <CustomInput/>
      </div>
  )
}

export default App
