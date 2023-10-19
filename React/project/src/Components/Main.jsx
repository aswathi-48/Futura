import React, { useEffect, useState } from 'react'
import logo from './Assets/Nav-Logo.png'
import img from './Assets/body-image.jpg'
import { BiSearch } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiSolidCart } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import { apiData } from './Api/MyApi';
import img1 from './Assets/body-image.jpg';
import Carousel from 'react-bootstrap/Carousel';
import img2 from './Assets/slide2.jpg';
import img3 from './Assets/slide3.jpg';

import './Main.css'
import Body from './Body';
import Home from './Home';
import Cart from './Cart';
const Main = () => {


    const [state, setState] = useState([]);
    const [filterdState, setFilteredState] = useState([])
    const [activeFilter, setActiveFilter] = useState('All')
    const [activeNav,setActiveNav]=useState(0)
    useEffect(() => {
        async function api() {
            try {
                setState(apiData);
                setFilteredState(apiData)
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        api()
    }, [])

    const handleClick = (filter) => {
        setActiveFilter(filter);
        if (filter == 'All') {
            setFilteredState(state);
        } else {
            const filtered = state.filter(item => item.type.toLowerCase() === filter.toLowerCase());
            setFilteredState(filtered);
        }

    }

    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex) => {
    //     setIndex(selectedIndex);
    // };

    const handleNavClick=(index)=>{
        setActiveNav(index)
    }

    return (
        <div className='main-div'>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Rubik:wght@400&amp;display=swap"
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
                            <BiSearch className='nav-search-icon'/>
                        </div>
                        {/* <div className='nav-search-icon'>
                          
                        </div> */}
                    </div>
                    <div className='nav-cart'>
                        <button className='home-btn' onClick={()=>handleNavClick(0)}><AiFillHome className='hom-icon' /> </button>
                        <div className='profile-btn'>
                            <button className='nav-cart-btn1'><BsFillPersonFill className='profile-icon' /> MySpace</button>
                            <div className='drop'>
                                <a href="1">Personal</a>
                                <a href="2">Order</a>
                                <a href="3">Help Centre</a>
                                <a href="4">Settings</a>
                                <a href="5">Offers</a>
                                <a href="6">LogOut</a>
                            </div>
                        </div>
                        <button className='nav-cart-btn2' onClick={()=>handleNavClick(1)}><BiSolidCart className='cart-icon' /> Cart <span className='nav-span'>10</span></button>
                    </div>
                </div>
            </header>
            <section>
                <div className="dropdown">
                    <button onClick={() => handleClick('All')} className={`dropbtn ${activeFilter === 'All' ? 'active' : ''}`}>Our Collections</button>

                </div>
                <div className="dropdown">
                    <button className="dropbtn">Dress</button>
                    <div className="dropdown-content">
                        <a onClick={() => handleClick('Men')} className={`dropdown-menu1 ${activeFilter === 'Men' ? 'active' : ''}`}>Men</a>
                        <a onClick={() => handleClick('Women')} className={`dropdown-menu2 ${activeFilter === 'Women' ? 'active' : ''}`} >Women</a>
                        <a onClick={() => handleClick('Kids')} className={`dropdown-menu3 ${activeFilter === 'Kids' ? 'active' : ''}`}>Kids</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Electronics</button>
                    <div className="dropdown-content">
                        <a onClick={() => handleClick('Mobile')} className={`dropdown-menu1 ${activeFilter === 'Mobile' ? 'active' : ''}`}>Mobile</a>
                        <a onClick={() => handleClick('Camera')} className={`dropdown-menu1 ${activeFilter === 'Camera' ? 'active' : ''}`}>Camera</a>
                        <a onClick={() => handleClick('Laptop Accessories')} className={`dropdown-menu3 ${activeFilter === 'Laptop Accessories' ? 'active' : ''}`}>Laptop Accessories</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Beauty&Health</button>
                    <div className="dropdown-content">
                        <a onClick={() => handleClick('Makeup')} className={`dropdown-menu1 ${activeFilter === 'Makeup' ? 'active' : ''}`}>Makeup</a>
                        <a onClick={() => handleClick('Wellness')} className={`dropdown-menu2 ${activeFilter === 'Wellness' ? 'active' : ''}`}>Wellness</a>
                        <a onClick={() => handleClick('Skincare')} className={`dropdown-menu3 ${activeFilter === 'Skincare' ? 'active' : ''}`}>Skincare </a>
                    </div>
                </div>
                <div className="dropdown">
                <button className="dropbtn">Jewelleri</button>
                    <div className="dropdown-content">
                        <a onClick={() => handleClick('Chain')} className={`dropdown-menu1 ${activeFilter === 'Chain' ? 'active' : ''}`}>Chain</a>
                        <a onClick={() => handleClick('Earrings')} className={`dropdown-menu2 ${activeFilter === 'Earrings' ? 'active' : ''}`}>Earrings</a>
                        <a onClick={() => handleClick('Anklet')} className={`dropdown-menu3 ${activeFilter === 'Anklet' ? 'active' : ''}`}>Anklet </a>
                    </div>

                </div>
               
                <div className="dropdown">
                    <button className="dropbtn">Top Sellers</button>

                </div>
                {/* <button onClick={() => handleClick('Jewelleri')} className={`dropbtn ${activeFilter === 'Jewelleri' ? 'active' : ''}`}>Jewelleri</button> */}


            </section>

           <div>
            
            {activeNav===0 && <Home values={filterdState} />}
            {activeNav===1 && <Cart values={filterdState} />}
           </div>
        </div>
    )
}


export default Main