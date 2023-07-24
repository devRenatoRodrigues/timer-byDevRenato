import { useCallback, useEffect, useState } from 'react'

function CountDownTimer() {
  const [counter, setCounter] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const counterIncrement = (value) => {
    const sum = counter + value;
    return setCounter(sum);
  };

  const stopTimer = useCallback(() => {
    setIsTimerRunning(false);
    clearInterval(intervalId);
  }, [intervalId]);

  const startTimer = () => {
    if (!isTimerRunning) {
      setIsTimerRunning(true);
      setIntervalId(setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000));
    }
  };

  useEffect(() => {
    if (isTimerRunning && counter === 0) {
      stopTimer();
    }
  }, [isTimerRunning, counter, stopTimer]);

  return {
    counter,
    setCounter,
    counterIncrement,
    startTimer,
    stopTimer,
    isTimerRunning
  }
}

export default CountDownTimer