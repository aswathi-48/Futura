import React, { useState } from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import './Nav.css'
import logo from './Assets/logo.png'
import { Link } from 'react-router-dom';

const Nav = ({searchbtn}) => {
    const [Search,setSearch]=useState()
    return (
        <div>

            <div className='free'>

                <div className='icon'>
                    <FaTruckMoving />
                </div>
                <p> Free Shipping when shopping upto $1000   </p>

            </div>
            <div className='main-header'>
                <div className='container'>
                    <div className='logo'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='search_box'>
                        <input type="text" name="" value={Search} placeholder='search your product...' autoComplete='off' onChange={(e)=>setSearch(e.target.value)}/>
                        <button className='search-btn' onClick={()=>searchbtn ((Search))}>search</button>
                    </div>
                    <div className='icon'>
                        <div className='account'>
                            <div className='user-icon'>
                                <AiOutlineUser />
                            </div>
                            <p>Hello,User</p>
                        </div>
                        <div className='second-icon'>
                            <Link to='/' className='link'> <AiOutlineHeart /></Link>
                            <Link to='/cart' className='link'><BsBagCheck /></Link> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='header'>
                <div className='containerr'> 
                <div className='nav'>
                <ul>
                    <li>
                        <Link to='/' className='link2'>Home</Link>
                    </li>
                    <li>
                        <Link to='/product' className='link2'>Product</Link>
                    </li>
                    <li>
                        <Link to='/about' className='link2'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'className='link2'>Contact</Link>
                    </li>
                </ul>
                </div>
                    <div className='in-out'>
                <button> <CiLogin/> </button>
                <button> <CiLogout/> </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Nav