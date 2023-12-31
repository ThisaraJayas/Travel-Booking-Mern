import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { AuthContextProvider } from './context/AuthContext.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
    </AuthContextProvider>
  </React.StrictMode>,
)
