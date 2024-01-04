import React from 'react'
import { Link } from 'react-router-dom'
import '../Reg-form/Register.css'
import { CgGirl } from "react-icons/cg";
import { MdOutlineLockOpen } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";


const Register = () => {
    return (
        <div className='register'>
            <div className='reg-main'>
                <div className='reg-main-one'>
                <div className='reg-head'>
                    <h4>Register</h4>
                </div>
                <div className='reg-body'>
                    <div  className='reg-body-one'>
                    <div className='reg-body-cntnt'>
                    <CgGirl className='reg-icon'/>
                        <input type="text" placeholder='Name' />
                    </div>
                    <div className='reg-body-cntnt'>
                    <HiOutlineMail className='reg-icon'/>
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className='reg-body-cntnt'>
                    <MdOutlineLockOpen className='reg-icon'/>
                        <input type="password" placeholder='Passoword' />
                    </div>
                    <div className='reg-btn'>
                        <button>Create Account</button>
                    </div>
                    <div className='reg-para'>
                        <p>Already have an account?<Link to='/login' className='reg-link'>Login</Link></p>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Register