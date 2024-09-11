import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './component/App.jsx'
import './index.css'
import Footer from './component/Footer.jsx'
import Navbar from './component/navbar.jsx'
import Contact from './component/contact.jsx'
import Testimonial from './component/testimonial.jsx'
import Steps from './component/steps.jsx'
import Features1 from './component/features1.jsx'
import CTA from './component/cta.jsx'
import Features2 from './component/features2.jsx'
// import Hero from './component/hero.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Navbar></Navbar>
    <App />
    {/* <Hero></Hero> */}
    <Features1></Features1>
    <CTA></CTA>
    <Features2></Features2>
    <Steps></Steps>
    <Testimonial></Testimonial>
    <Contact></Contact>
    <Footer/>

  </React.StrictMode>,
)
