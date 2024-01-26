import React from 'react'
import Navbar from './Navbar'
import './Content.css'
import { Outlet } from 'react-router-dom'




const Content = () => {
  return (
    <div className='nav-bar'>
      <Navbar/>
      <Outlet/>
    
      

    </div>
  )
}

export default Content