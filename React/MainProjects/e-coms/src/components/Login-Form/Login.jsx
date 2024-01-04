import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineLockOpen } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import './Login.css'
const Login = () => {
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
                                <input type="email" placeholder='Email' />
                            </div>
                            <div className='log-body-cntnt'>
                                <MdOutlineLockOpen className='log-icon' />
                                <input type="password" placeholder='Passoword' />
                            </div>
                            <div className='log-frgt'> 
                                <p>Forget Password?</p>
                            </div>
                            <div className='log-btn'>
                                <button>Login</button>
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