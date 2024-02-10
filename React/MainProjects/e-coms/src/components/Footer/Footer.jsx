import React from 'react'
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='container1'>
                <div className='about'>
                    <div className='logo'>
                        {/* <img src={logo} alt="" /> */}
                        <h1 className='logo-head'> Tasteee</h1>
                    </div>
                    <div className='detail1'>
                        <p>"Eat well, laugh often, love much."</p>
                        
                    </div>
                </div>
                <div className='accounts'>
                <h3>ContactUs</h3>
                <ul>
                    <li>Help&Support</li>
                    <li>Order</li>
                    <li>BestOffer</li>
                    <li>Delivery</li>
                </ul>
            </div>
            <div className='pages'>
                <h3>Items</h3>
                <ul>
                    {/* <li>Home</li> */}
                    <li>Pizza</li>  
                    <li>Burger</li>
                    <li>Dessert</li>
                </ul>
            </div>
            <div className='detail1'>
                        <h4 className='follow'>Follow Us,</h4>
                        <div className='icon1'>                       
                        <li><BiLogoFacebook/></li>
                        <li><FaInstagram/></li>
                        <li><FaTwitter/></li>
                        <li><FaYoutube/></li>
                        </div>
                    </div>
            </div>
            
        </div>

    </div>
  )
}

export default Footer