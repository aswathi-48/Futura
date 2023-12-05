import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getProfile } from '../Components/Apicall'
import './NavbarProfile.css'
import axios from 'axios'

const NavbarProfile = () => {
 
  const [data1, setData1] = useState()
  
 
  const fullData=useSelector((state)=>state.users.userInfo)
  console.log(fullData,'**********************');
  if(fullData){
    var Id=fullData[0]&&fullData[0]._id
  }
console.log("+++++++",Id);
  const display=async()=>{
   var data=await getProfile(Id)

    console.log("data ?",data.data);
   setData1(data.data)
  } 

console.log(data1,'jhjghjghj');

  return (
    <div>
      <div className='nav-main'>
        <div className='nav-search'>
          <input type="text" placeholder='search here' />
          <button>search</button>
      </div>
      <div className='nav-list'>
        <ul>
          <li>Home</li>
      <li onClick={display}>Profile</li>
      <li>Update</li>
        </ul>

      </div>
      </div>
      <div className='mapping'>
      <h1 className='head'>Your Details....</h1>
          <div className='map-data'>
              <div >
                <h3>{data1&&data1.FirstName}</h3>
                <h4>{data1&&data1.Email}</h4>
              </div>
          
          </div>
      </div>
    
    </div>
  )
}

export default NavbarProfile




