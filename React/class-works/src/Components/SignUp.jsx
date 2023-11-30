import React, { useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
import { SignupData } from './Apicall'


const SignUp = () => {
  
  const [FirstName,setName]=useState()
  const [Email,setEmail]=useState()
  const [Phone,setPhone]=useState()
  const [Password,setPassword]=useState()

  const display=()=>{
    SignupData({FirstName,Email,Phone,Password})
  }
  return (
    <div>
      <div className='container'>
      <div className='s-main'>
        <h2>SignUp</h2>
        <input type="text" placeholder='Enter Your FirstName' value={FirstName} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder='Enter Your Email' value={Email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='Enter Your Phone'value={Phone} onChange={(e)=>setPhone(e.target.value)}/>
        <input type="password" placeholder='Enter Your Password' value={Password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className='signup-btn' onClick={display}>SignUp</button>
        <div className='sign'>
        <p>Already have an Account :</p>
        <h5> <Link to='/login' className='links'> SignIn</Link> </h5>
        </div>
        </div>
    </div>
    </div>
  )
}

export default SignUp