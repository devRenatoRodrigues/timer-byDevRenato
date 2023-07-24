import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CountDownTimerProvider from './contexts/useCountDownProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CountDownTimerProvider>
    <App />
  </CountDownTimerProvider>,
)
