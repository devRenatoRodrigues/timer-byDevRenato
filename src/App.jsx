import './App.css'
import useCountDownTimerContext from './contexts/useCountDownContext'
import Button from './components/Button'
import { timerConvert } from './utils/utilsFunctions'

function App() {
  const {
    counter,
    counterIncrement,
    startTimer,
    stopTimer,
    isTimerRunning
  } = useCountDownTimerContext()
  return (
    <>
      <div>{counter === 0 ? '00:00' : timerConvert(counter)}</div>
      <div>
        <Button
          onClick={() => counterIncrement(60)}
          tittle={'1 minuto'}
        />
        <Button
          onClick={() => counterIncrement(300)}
          tittle={'5 minutos'}
        />
        <Button
          onClick={() => counterIncrement(600)}
          tittle={'10 minutos'}
        />
        {isTimerRunning ? <Button
          onClick={() => stopTimer()}
          tittle={'Stop'}
        /> : <Button
          onClick={() => startTimer()}
          tittle={'Start'}
        />}
      </div>
    </>
  )
}

export default App
