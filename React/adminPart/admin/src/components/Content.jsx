import React from 'react'
import Navbar from './Navbar'
import './Content.css'
import { Outlet } from 'react-router-dom'
import DashContent from './Dashborad/DashContent'




const Content = () => {
  return (
    <div className='nav-bar'>
      <Navbar/>
      {/* <DashContent/> */}
      <Outlet/>
    
      

    </div>
  )
}

export default Content