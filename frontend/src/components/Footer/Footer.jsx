import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>"Bringing mouthwatering meals right to your doorstep, with care, speed, and a commitment to making every bite a delightful experience. From our kitchen to your home, we ensure quality, taste, and convenience in every delivery."</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+250780386222</li>
                    <li>furahacelia33@gmail.com</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2025 © Foodel.com - All Rights Reserved.</p>
      
    </div>
  )
}

export default Footer
