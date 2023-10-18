import React from 'react'
import logo from './Assets/Nav-Logo.png'
import img from './Assets/body-image.jpg'
import { BsSearch } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsCart2 } from 'react-icons/bs';
import './Main.css'
import Body from './Body';
const Main = () => {


    return (
        <div className='main-div'>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Lobster:wght@400&amp;display=swap"
                data-tag="font"
            />
            <header>
                <div className='nav-bar'>
                    <div className='nav-logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='nav-search'>
                        <div className='nav-search-input'>
                            <input type="text" placeholder='search' />
                        </div>
                        <div className='nav-search-icon'>
                            <BsSearch />
                        </div>
                    </div>
                    <div className='nav-cart'>   
                        <button className='nav-cart-btn1'><BsFillPersonFill />Profile</button>
                        <button className='nav-cart-btn2'><BsCart2 /> Cart <span className='nav-span'>1</span></button>
                    </div>
                </div>
            </header>
            <section>
            <div class="dropdown">
                    <button class="dropbtn">Our Collections</button>
                    
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Dress</button>
                    <div class="dropdown-content">
                        <a href="#">Men</a>
                        <a href="#">Women</a>
                        <a href="#">Kids</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Electronics</button>
                    <div class="dropdown-content">
                        <a href="#">Mobile</a>
                        <a href="#">Cameras</a>
                        <a href="#">Laptop Accessories</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Beauty&Health</button>
                    <div class="dropdown-content">
                        <a href="#">Makeup</a>
                        <a href="#">Wellness</a>
                        <a href="#">Skincare    </a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Jewelleri</button>
                    
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Top Sellers</button>
                    
                </div>

            </section>

            <body>
                <div className='body-img'>
                    <img src={img} alt="" />
                </div>
            </body>
        <Body/>
        </div>
    )
}


export default Main