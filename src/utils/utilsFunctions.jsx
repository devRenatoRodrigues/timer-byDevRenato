export const timerConvert = (num) => {
    const hours = Math.floor(num / 3600);
    const remainingMinutes = Math.floor((num % 3600) / 60);
    let seconds = num % 60;
  
    if (seconds >= 0 && seconds <= 9) {
      seconds = '0' + seconds;
    }
  
    if (remainingMinutes >= 0 && remainingMinutes <= 9) {
      return `${hours}:0${remainingMinutes}:${seconds}`;
    }
  
    return `${hours}:${remainingMinutes}:${seconds}`;
  };