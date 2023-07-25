import cafeAudio from '../assets/depression.mp3' 
import Swal from 'sweetalert2'
import { useCallback, useEffect, useState } from 'react'

function CountDownTimer() {
  const [counter, setCounter] = useState(5);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const counterIncrement = (value) => {
    const sum = counter + value;
    return setCounter(sum);
  };

  const playCafe = () => {
    const audioElement = new Audio(cafeAudio)
    audioElement.play()
    Swal.fire({
      title: 'CoffeBreak is over!!',
      text: 'Back to the Office, Now!!',
      imageUrl: 'src/assets/sales-lessons-from-michael-scott.jpg',
      background: '#010D12',
      color: '#FFFFFF',
      confirmButtonColor: '#0d6efd',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      customClass: {
        container: 'custom-swal',
      },
    })
  }


  const clearButton = () => {
    setCounter(0);
    setIsTimerRunning(false)
    clearInterval(intervalId);
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
      playCafe();
    }
  }, [isTimerRunning, counter, stopTimer]);

  return {
    counter,
    setCounter,
    counterIncrement,
    startTimer,
    stopTimer,
    isTimerRunning,
    clearButton,
  }
}

export default CountDownTimer