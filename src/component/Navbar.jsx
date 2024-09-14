// import React from 'react'

// export default function navbar() {
//   return (
//     <>
//    <header class="text-gray-400 bg-gray-900 body-font">
//   <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-pink-500 rounded-full" viewBox="0 0 24 24">
//         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//       </svg>
//       <span class="ml-3 text-xl">PMSSS</span>
//     </a>
//     <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
//       <a class="mr-5 hover:text-white">First Link</a>
//       <a class="mr-5 hover:text-white">Second Link</a>
//       <a class="mr-5 hover:text-white">Third Link</a>
//       <a class="mr-5 hover:text-white">Fourth Link</a>
//     </nav>
//     <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"><a href="Login.jsx">Login</a>
//       {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
//         <path d="M5 12h14M12 5l7 7-7 7"></path>
//       </svg> */}
//     </button>
//     <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 ml-6"><a href='sinup.html'>Sinup</a>
//       {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
//         <path d="M5 12h14M12 5l7 7-7 7"></path>
//       </svg> */}
//     </button>
//   </div>
// </header>
//     </>
//   )
// }


import React from 'react'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <header className="navbar-container">
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navbar-image1"
        />
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <nav className="navbar-links1">
            <span className="thq-body-small thq-link">{props.link1}</span>
            <span className="thq-body-small thq-link">{props.link2}</span>
            <span className="thq-body-small thq-link">{props.link3}</span>
            <span className="thq-body-small thq-link">{props.link4}</span>
            <span className="thq-body-small thq-link">{props.link5}</span>
          </nav>
          <div className="navbar-buttons1">
            <button className="navbar-action11 thq-button-filled thq-button-animated">
              <span className="thq-body-small">Login<a href='Login.jsx'></a></span>
            </button>
            <button className="navbar-action21 thq-button-outline thq-button-animated">
              <span className="thq-body-small">sign up</span>
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-nav">
            <div className="navbar-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar-logo"
              />
              <div data-thq="thq-close-menu" className="navbar-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar-links2">
              <span className="thq-body-small thq-link">{props.link1}</span>
              <span className="thq-body-small thq-link">{props.link2}</span>
              <span className="thq-body-small thq-link">{props.link3}</span>
              <span className="thq-body-small thq-link">{props.link4}</span>
              <span className="thq-body-small thq-link">{props.link5}</span>
            </nav>
          </div>
          <div className="navbar-buttons2">
            <button className="thq-button-filled">Login</button>
            <button className="thq-button-outline">Register</button>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar.defaultProps = {
  link1: 'Home',
  action2: '/about',
  link2: 'About Us',
  link4: 'FAQs',
  link5: 'Contact Us',
  logoAlt: 'PMSSS Logo',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7`41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  action1: '/home',
  link3: 'Scholarship Programs',
}

Navbar.propTypes = {
  link1: PropTypes.string,
  action2: PropTypes.string,
  link2: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  action1: PropTypes.string,
  link3: PropTypes.string,
}

export default Navbar
