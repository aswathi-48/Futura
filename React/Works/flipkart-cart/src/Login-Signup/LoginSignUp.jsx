import React from 'react'
import './LoginSignUp.css'
import { BiSolidUser } from 'react-icons/bi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';



const LoginSignUp = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>Sign Up</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <BiSolidUser/>
                <input type="text" />
            </div>
            <div className='input'>
                <MdEmail/>
                <input tyype="email" />
            </div>
            <div className='input'>
                 <RiLockPasswordFill/>
                <input type="password" />
            </div>
        </div>
        <div className='forgot-password'>Lost Password? <span>Click Here!</span></div>
        <div className='submit-container'>
            <div className='submit'>Sign Up</div>
            <div className='submit'>Login</div>
        </div>
    </div>
  )
}

export default LoginSignUp