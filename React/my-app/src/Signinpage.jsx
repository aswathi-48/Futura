import React from 'react'
import './Signinpage.css'

function Signinpage() {
  return (
    <div>
        <center>
        <div className='main'>
     
        <div className='main2'>
            <h4>Welcome back,its me</h4>
            <p>Welcome back please enter your details.</p><br />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' /><br />
            <button type="submit" class="signinbtn">Sign In</button>
            <p>Forgot password?</p>
        </div>
        </div>
        </center>
    </div>
  )
}

export default Signinpage