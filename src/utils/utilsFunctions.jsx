export const timerConvert = (num) => {
    const minutes = Math.floor(num / 60);  
    let seconds = num % 60;
    if (seconds >= 0 && seconds <= 9){
         seconds = '0' + seconds
        return `${minutes}:${seconds}`
    }
    return `${minutes}:${seconds}`
}