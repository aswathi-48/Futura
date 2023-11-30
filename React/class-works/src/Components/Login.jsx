import React, { useState } from 'react'
import './Login.css'
import { useDispatch } from 'react-redux'
import { LoginDatas } from './Apicall';

const Login = () => {

   const dispatch=useDispatch();
    
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
 
    const show =()=>{
        try{
            LoginDatas({Email,Password},dispatch);
        }catch(err){
            console.log(err);
        }
    }
 
  return (
    <div>
        <div className='L-main'>
            <h2>Login</h2>
        <input type="email" placeholder='Enter Your Email' value={Email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Enter Your Password' value={Password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={show} className='login-btn'>Login</button>
        {/* <p>Forgot Password?</p> */}
        </div>
    </div>
  )
}

export default Login