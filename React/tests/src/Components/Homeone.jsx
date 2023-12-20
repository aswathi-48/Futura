import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeData } from '../Redux/Userredux'
import NavbarProfile from '../Pages/NavbarProfile'
import './Homeone.css'
import { Link } from 'react-router-dom'
const Homeone = () => {
  // const data=useSelector((state)=>state.users.userInfo)
  // console.log("*******",data);
    const dispatch=useDispatch()

    function LogoutData(){
        dispatch(removeData())
    }
  return (
    <div>
   <NavbarProfile/>
      {/* <h1>Your Details....</h1> */}
        <div className='main-buttons'>
        <div className='logingout-btn'>
        <button onClick={LogoutData}>LogOut</button>
        </div>
        <div className='update-btn'>
        <button><Link to='/update' className='u-link'>Update</Link></button>
        </div>
        </div>
     </div>

  )
}

export default Homeone