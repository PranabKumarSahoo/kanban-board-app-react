import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DisplayCardProvider } from './context/DisplayCardContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DisplayCardProvider>
      <App />
    </DisplayCardProvider>
  </React.StrictMode>,
)
