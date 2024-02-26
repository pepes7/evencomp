import ReactDOM from 'react-dom'
import App from './App.tsx'
import ToastConfig from './components/ToastConfig'
import { ToastProvider } from 'react-toast-notifications'

ReactDOM.render(
  <ToastProvider
    autoDismissTimeout={3000}
    placement="top-center"
    autoDismiss
    components={{ Toast: ToastConfig }}
  >
    <App />
  </ToastProvider>,
  document.getElementById('root'),
)
