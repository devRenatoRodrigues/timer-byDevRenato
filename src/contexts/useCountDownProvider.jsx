import { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import CountDownTimer from '../hooks/useCountDownTimer'

export const CountDownTimerContext = createContext();

function CountDownTimerProvider({ children }) {
    const {
        counter, setCounter, counterIncrement, startTimer,
        stopTimer,
        isTimerRunning
    } = CountDownTimer();

    const context = useMemo(() => ({
        counter, setCounter, counterIncrement, startTimer,
        stopTimer,
        isTimerRunning
    }), [
        counter, setCounter, counterIncrement, startTimer,
        stopTimer,
        isTimerRunning
    ]);

    return (
        <CountDownTimerContext.Provider value={context}>
            {children}
        </CountDownTimerContext.Provider>

    );
}

CountDownTimerProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default CountDownTimerProvider;