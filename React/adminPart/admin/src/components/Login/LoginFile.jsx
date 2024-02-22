import React, { useState } from 'react'
import './LoginFile.css'
import { Link } from 'react-router-dom'
import { MdOutlineLockOpen } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { AdminLogin } from '../ApiCallll/Apicall';
import { useDispatch, useSelector } from 'react-redux';
const LoginFile = () => {


    const dispatch = useDispatch()

    const [Email,setEmail] =useState('');
    const [Password,setPassword]=useState('');


    const display=()=>{
        AdminLogin({Email,Password},dispatch)
    }

    // const data = useSelector((state) => state.Adminss.adminData)
    // console.log("***",data);


  return (
    <div className='login'>
    <div className='log-main'>
        <div className='log-main-one'>
            <div className='log-head'>
                <h4>login</h4>
            </div>
            <div className='log-body'>
                <div className='log-body-one'>
                    <div className='log-body-cntnt'>
                        <HiOutlineMail className='log-icon' />
                        <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className='log-body-cntnt'>
                        <MdOutlineLockOpen className='log-icon' />
                        <input type="password" placeholder='Passoword' onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <div className='log-frgt'> 
                      <Link to={'/forgotpass'}>  <p>Forget Password?</p></Link>
                    </div>
                    <div className='log-btn'>
                        <button onClick={display}>Login</button>
                    </div>
                    <div className='log-para'>
                    <p>Don't have an account?<Link to='/register' className='log-link'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>
  )
}

export default LoginFile