import React from 'react'
import './Signin.css'

const SignIn = () => {
  return (
    <div>
        <div>

<div className='login-main'> 
    <div className='login-card'>
        <h2>LOGIN</h2>
        <p>Please enter your login and password!</p>
        <div className='login-inputs'>
            <input type="text" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <p>Forgot Password?</p>
        </div>
        <div>
            <button className='login-button' >LOGIN</button>
        </div>
        <div className='login-icons'>
            <i className="fa-brands fa-facebook-f fa-beat"></i>
            <i className="fa-brands fa-twitter fa-beat"></i>
            <i className="fa-brands fa-instagram fa-beat"></i>
            <i className="fa-brands fa-google fa-beat"></i>
        </div>
        <div>
            <span>Dont have an account? <span>Sign Up</span></span>
        </div>
    </div>
</div>
</div>
    </div>
  )
}

export default SignIn