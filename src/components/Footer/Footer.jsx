import React from 'react'
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        <div className="footerCon">
        <h1>Cohort 5.0</h1>
        <div className="fOne">
            <h2>About</h2>
            <p>About Us</p>
        </div>
        
        <div className="fTwo">
            <h2>Contact</h2>
            <p>Contact Us</p>
        </div>

        <div className="fThree">
            <h2>Pages</h2>
            <p>Our Pages</p>
        </div>
        </div>
        <p>&copy;copyright {currentYear}. All Rights Reserved!</p>
    </footer>
  )
}

export default Footer