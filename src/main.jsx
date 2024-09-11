import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './component/App.jsx'
import './index.css'
import Footer from './component/Footer.jsx'
import Navbar from './component/Navbar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer/>
  </React.StrictMode>,
)
