import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineLockOpen } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import './Login.css'
import { LoginValue } from '../ApiCallll/ApiCall';
import { useDispatch } from 'react-redux';


const Login = () => {
    const dispatch = useDispatch();
    const [Email,setEmail] =useState('')
    const [Password,setPassword] = useState('')



    const display = () => {
        try{
            LoginValue({Email,Password},dispatch)
        }catch(err){
            console.log(err);
        }
    }
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
                              <Link to={'/forgotpass'}> <p>Forget Password?</p></Link> 
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

export default Login