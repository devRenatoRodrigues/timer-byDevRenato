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
      <div id="clock">
        <p className="time">{counter === 0 ? '00:00' : timerConvert(counter)}</p>
        <div id="button-container">
          <Button
            onClick={() => counterIncrement(60)}
            tittle={'1 minuto'}
            type={"button"}
            className={"btn btn-outline-info button-margin"}
          />
          <Button
            onClick={() => counterIncrement(300)}
            tittle={'5 minutos'}
            type={"button"}
            className={"btn btn-outline-info button-margin"}
          />
          <Button
            onClick={() => counterIncrement(600)}
            tittle={'10 minutos'}
            type={"button"}
            className={"btn btn-outline-info button-margin"}
          />
          {isTimerRunning ? <Button
            onClick={() => stopTimer()}
            tittle={'Stop'}
            type={"button"}
            className={"btn btn-outline-danger button-margin"}
          /> : <Button
            onClick={() => startTimer()}
            tittle={'Start'}
            type={"button"}
            className={"btn btn-outline-success button-margin"}
          />}
        </div>
        <p className="text" >Timer byDevRenatoRodrigues</p>
      </div>
    </>
  )
}

export default App
