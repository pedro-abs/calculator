import './App.css'

import Button from './components/buttons/button.jsx'

function App() {
  return (
    <div className='container'>
      <div className="grid">
        <div className="screen">
          <div className='previous-screen' data-previous></div>
          <div className='current-screen' data-current></div>
        </div>
        <div className="digits">
          <Button symbol='C' className='c' data-clear/>
          <Button symbol='←' className='back' data-delete/>
          <Button symbol='/' className='div special' data-operator/>
          <Button symbol='x' className='mult special' data-operator/>
          <Button symbol='-' className='less special' data-operator/>
          <Button symbol='7' className='seven' data-number/>
          <Button symbol='8' className='eight' data-number/>
          <Button symbol='9' className='nine' data-number/>
          <Button symbol='+' className='more special' data-operator/>
          <Button symbol='4' className='four' data-number/>
          <Button symbol='5' className='five' data-number/>
          <Button symbol='6' className='six' data-number/>
          <Button symbol='1' className='one' data-number/>
          <Button symbol='2' className='two' data-number/>
          <Button symbol='3' className='three' data-number/>
          <Button symbol='0' className='zero' data-number/>
          <Button symbol='.' className='point' data-number/>
          <Button symbol='=' className='result special' data-result/>
        </div>
      </div>
    </div>
  )
}

export default App