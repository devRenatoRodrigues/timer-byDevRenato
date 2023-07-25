import { useContext } from 'react';
import { CountDownTimerContext } from './useCountDownProvider';

const useCountDownTimerContext = () => useContext(CountDownTimerContext);

export default useCountDownTimerContext;