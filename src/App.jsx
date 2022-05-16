import './App.css'

import Button from './components/buttons/button'
import Screen from './components/screen/screen'

function App() {
  return (
    <div className='container'>
      <div className="grid">
        <Screen/>
        <div className="digits">
          <Button symbol='x' className='mult btn-medium'/>
          <Button symbol='/' className='div btn-small'/>
          <Button symbol='-' className='less btn-small'/>
          <Button symbol='7' className='seven'/>
          <Button symbol='8' className='eight'/>
          <Button symbol='9' className='nine'/>
          <Button symbol='+' className='more'/>
          <Button symbol='4' className='four'/>
          <Button symbol='5' className='five'/>
          <Button symbol='6' className='six'/>
          <Button symbol='1' className='one'/>
          <Button symbol='2' className='two'/>
          <Button symbol='3' className='three'/>
          <Button symbol='0' className='zero'/>
          <Button symbol='.' className='point'/>
          <Button symbol='=' className='result'/>
        </div>
      </div>
    </div>
  )
}

export default App
