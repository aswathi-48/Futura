import React from 'react'
import './Navbar.css'
import { FiSearch } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


const Navbar = () => {
    return (
        <div className='Nav'>
            <div className='Nav-main'>
               <div className='main'>
              <div className='search'>
                <CiSearch className='icon'/>
                <input type="text" placeholder= 'search' className='search-input' />
                </div>
                {/* <button className='search-btn'>search</button> */}
                <div className='user-icon'>
                 <Link to='/display'>  <FaRegUser className='ic'/></Link> 
                </div>
                </div> 
               
             
            </div>
            {/* <Outlet/> */}

        </div>
    )
}

export default Navbar