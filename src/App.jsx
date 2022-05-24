import { useState } from "react";
import "./App.css";

import Button from "./components/buttons/button.jsx";

function App() {
  const [state, setState] = useState([])
  const [screenCurrent, setScreenCurrent] = useState('0')
  console.log(state)
  function Write(symbol) {
    if (Number.isNaN(Number(symbol))) {
      if (state.length === 1 || state.length === 2) {
        setState([state[0], symbol])
      } else if (state.length === 3) {
        switch (state[1]) {
          case '+':
            setState([Number(state[0]) + Number(state[2]), symbol])
            break
          case '-':
            setState([Number(state[0]) - Number(state[2]), symbol])
            break
          case '/':
            setState([Number(state[0]) / Number(state[2]), symbol])
            break
          case 'x':
            setState([Number(state[0]) * Number(state[2]), symbol])
            break
          // case '=':
          //   setState([])
          // default:
            
        }
      }
    } else {
      if (state.length === 0 || state.length === 1) {
        if (state.length === 1) {
          setState([state[0] + symbol])
        } else {
          setState([symbol])
        }
      } else if (state.length === 2 || state.length === 3) {
        if (state.length === 2) {
          setState([...state, symbol])
        } else {
          setState([state[0], state[1], state[2] + symbol])
        }
      }
    }
  }
  return (
    <div className="container">
      <div className="grid">
        <div className="screen">
          <div className="state-screen">{state}</div>
          <div className="current-screen">{screenCurrent}</div>
        </div>
        <div className="digits">
          <Button symbol="C" className="c" onClick={(symbol) => Write(symbol)}/>
          <Button symbol="←" className="back" onClick={(symbol) => Write(symbol)}/>
          <Button symbol="/" className="div special" onClick={(symbol) => Write(symbol)}/>
          <Button symbol="x" className="mult special" onClick={(symbol) => Write(symbol)}/>
          <Button symbol="-" className="less special" onClick={(symbol) => Write(symbol)}/>
          <Button symbol="7" className="seven" onClick={(symbol) => Write(symbol)}/>
          <Button symbol="8" className="eight" onClick={(symbol) => Write(symbol)}/>
          <Button symbol="9" className="nine" onClick={(symbol) => Write(symbol)}/>
          <Button symbol="+" className="more special" onClick={(symbol) => Write(symbol)}/>
          <Button symbol="4" className="four" onClick={(symbol) => Write(symbol)}/>
          <Button symbol="5" className="five" onClick={(symbol) => Write(symbol)}/>
          <Button symbol="6" className="six" onClick={(symbol) => Write(symbol)}/>
          <Button symbol="1" className="one" onClick={(symbol) => Write(symbol)}/>
          <Button symbol="2" className="two" onClick={(symbol) => Write(symbol)}/>
          <Button symbol="3" className="three" onClick={(symbol) => Write(symbol)}/>
          <Button symbol="0" className="zero" onClick={(symbol) => Write(symbol)}/>
          <Button symbol="." className="point" onClick={(symbol) => Write(symbol)}/>
          <Button symbol="=" className="result special" onClick={(symbol) => Write(symbol)}/>
        </div>
      </div>
    </div>
  )
}

export default App;