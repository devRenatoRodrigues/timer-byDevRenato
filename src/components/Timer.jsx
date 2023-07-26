import  '../style/Timer.css'
import useCountDownTimerContext from '../contexts/useCountDownContext'
import Button from './Button'
import { timerConvert } from '../utils/utilsFunctions'

 function Timer() {
    const {
        counter,
        counterIncrement,
        startTimer,
        stopTimer,
        isTimerRunning,
        clearButton,
      } = useCountDownTimerContext()
      return (
        <>
          <div id="clock">
            <p className="time">{counter === 0 ? '00:00:00' : timerConvert(counter)}</p>
            <div id="button-container">
              <Button
                onClick={() => counterIncrement(60)}
                tittle={'1 minute'}
                type={"button"}
                className={"btn btn-outline-primary button-margin"}
              />
              <Button
                onClick={() => counterIncrement(300)}
                tittle={'5 minutes'}
                type={"button"}
                className={"btn btn-outline-primary button-margin"}
              />
              <Button
                onClick={() => counterIncrement(600)}
                tittle={'10 minutes'}
                type={"button"}
                className={"btn btn-outline-primary button-margin"}
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
              <Button
                onClick={() => clearButton()}
                tittle={'Clear'}
                type={"button"}
                className={"btn btn-outline-info button-margin"}
              />
            </div>
            <p className="text" >Timer byDevRenatoRodrigues</p>
          </div>
        </>
      )
}


export default Timer;