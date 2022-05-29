import { useState } from "react";
import "./App.css";

import Button from "./components/buttons/button.jsx";  

function App() {
  const [state, setState] = useState("0")
  const [screenValue, setScreenValue] = useState('0')

  console.log(state)

  function write(button) {
    const SYMBOLS_MAP = {
      "C": () => reset(),
      "←": () => setState(state.slice(0, -1)),
      "=": () => doCalc(),
      "/": () => insertSymbol("/"),
      "x": () => insertSymbol("*"),
      "-": () => insertSymbol("-"),
      "+": () => insertSymbol("+"),
    }

    const isNumber = !Boolean(SYMBOLS_MAP[button])

    if (isNumber) {
      insertNumber(button)
    } else {
      SYMBOLS_MAP[button]()
    }

    function doCalc() {
      const calc = state.split(/(\/|\*|-|\+)/)
      const isValidCalc = calc.length <= 3
      if (!isValidCalc) return

      const [firstValue, operator, lastValue] = calc

      const OPERATIONS_MAP = {
        "/": (a, b) => a / b,
        "*": (a, b) => a * b,
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
      }

      const result = String(OPERATIONS_MAP[operator](parseFloat(firstValue), parseFloat(lastValue)))
      setState(result + operator + '0')
      setScreenValue(result)
    }

    function reset() {
      setState("0")
      setScreenValue("0")
    }

    function insertSymbol(symbol) {
      const lastChar = state[state.length - 1]
      const isLastCharSymbol = Boolean(SYMBOLS_MAP[lastChar])

      if (isLastCharSymbol) {
        setState(state.slice(0, -1) + symbol)
        return
      }

      setState(state + symbol)
    }

    function insertNumber(number) {
      if (state === "0") {
        setState(number)
        return
      }

      setState(state + number)
    }
  }
  return (
    <div className="container">
      <div className="grid">
        <div className="screen">
          <div className="state-screen">{state}</div>
          <div className="current-screen">{screenValue}</div>
        </div>

        <div className="digits">
          <Button symbol="C" className="c" onClick={write}/>
          <Button symbol="←" className="back" onClick={write}/>
          <Button symbol="/" className="div special" onClick={write}/>
          <Button symbol="x" className="mult special" onClick={write}/>
          <Button symbol="-" className="less special" onClick={write}/>
          <Button symbol="7" className="seven" onClick={write}/>
          <Button symbol="8" className="eight" onClick={write}/>
          <Button symbol="9" className="nine" onClick={write}/>
          <Button symbol="+" className="more special" onClick={write}/>
          <Button symbol="4" className="four" onClick={write}/>
          <Button symbol="5" className="five" onClick={write}/>
          <Button symbol="6" className="six" onClick={write}/>
          <Button symbol="1" className="one" onClick={write}/>
          <Button symbol="2" className="two" onClick={write}/>
          <Button symbol="3" className="three" onClick={write}/>
          <Button symbol="0" className="zero" onClick={write}/>
          <Button symbol="." className="point" onClick={write}/>
          <Button symbol="=" className="result special" onClick={write}/>
        </div>
      </div>
    </div>
  )
}

export default App;