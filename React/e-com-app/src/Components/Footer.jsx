import React from 'react'
import './Footer.css'
import logo from './Assets/logo.png'
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='container1'>
                <div className='about'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='detail1'>
                        <p>We are a team of designers and developers thst create high quality Wordpress</p>
                        <div className='icon1'>
                        <li><BiLogoFacebook /></li>
                        <li><FaInstagram /></li>
                        <li><FaTwitter /></li>
                        <li><FaYoutube /></li>
                        </div>
                    </div>
                </div>
                <div className='accounts'>
                <h3>MyAccount</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>Return</li>
                </ul>
            </div>
            <div className='pages'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>  
                    <li>Contact</li>
                    <li>Term & Conditions</li>
                </ul>
            </div>
            </div>
            
        </div>

    </div>
  )
}

export default Footer