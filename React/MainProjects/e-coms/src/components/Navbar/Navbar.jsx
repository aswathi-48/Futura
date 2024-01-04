import React from 'react'
import './Navbar.css'
import { FiSearch } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='Nav'>
            <div className='Nav-main'>
                <div className='Nav-logo'>
                    {/* <img src={img} alt="" /> */}
                </div>
                <div className='Nav-cat'>
                <Link to='/'> <button>Home</button></Link>
                   <Link to='/men'> <button>Men</button></Link>
                   <Link to={'/women'}> <button>women</button></Link>

                  <Link to={'/kids'}> <button>Kids</button></Link> 
                 
                </div>
                <div className='Nav-search'>
                    <div className='icons-one'>
                    <FiSearch className='search-icon'/>
                    </div>
                    <input type="text" name="" id="" placeholder='search' />
                    {/* <button>search</button> */}
                </div>
                <div className='Nav-cart'>
                    {/* <button>profile</button> */}
                  <Link to={'/profile'}>  <h2><MdOutlinePerson className='icons'/>  </h2></Link>
                    <Link to={'/cart'}>  <h2> <FiShoppingCart className='icons' /></h2></Link>
                    {/* <button>cart</button> */}

                </div>


            </div>
            {/* <Outlet/> */}
            
        </div>
    )
}

export default Navbar