import React from 'react'
import { useDispatch } from 'react-redux'
import { removeData } from '../Redux/Userredux'
import logo from'./Assets/logoimg.png'
import './Home.css'
import { RiSearch2Line } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { IoPersonSharp } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { Link } from 'react-router-dom'





const Home = () => {

    const dispatch=useDispatch()

    function LogOut(){
        console.log("loged out");
        dispatch(removeData())
    }
console.log("haiii");
    
  return (
    <>
    
      <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='search-one'>
            <div className="search-bar">
      <RiSearch2Line className="search-icon" />
      <input type="text" placeholder="Search..."  />  
    </div>
    <button className='search-btn'>search</button>
    </div>
            <div className='nav-elements'>
                <ul>
                    <li><TiHome className='h-icons'/>Home</li>
        
                    <li ><IoPersonSharp className='p-icon'/> <Link to='/profile' className='p-link'>Profile</Link> </li>
                    <li onClick={LogOut}><LuLogOut className='logout-icon'/>Logout</li>
                </ul>
            </div>
        </div>

      </div>
        {/* <button onClick={LogOut}>LogOut</button> */}
        <div className='body'>
                {/* <img src="https://media.istockphoto.com/id/1140691167/photo/ai-concept.webp?b=1&s=170667a&w=0&k=20&c=6neARrbQ06JIR_3B2BDY_IYXK_mm-WYiBxgmFyu-MPo=" alt="" /> */}
                <div className='first-img'>
                    <div className='f-one'>
                      <div className='imgs1'>
                        <img src="https://t4.ftcdn.net/jpg/05/85/00/55/360_F_585005559_YNUJFQaDLRWN61mGNxWzz9GZypXSrOgz.jpg" alt=""/>
                        <div className='f-details'>
                            <h4>If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it.</h4>
                                  
                        </div>

                      </div>

                    </div>
                </div>
        </div>
    </>
  )
}

export default Home