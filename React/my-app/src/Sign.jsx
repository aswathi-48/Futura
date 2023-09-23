import React from 'react'
import './Sign.css'

function Sign() {
  return (
    <div>
        <center>
            <div className='abc'>
            <h1>SignUp</h1>
        <form action="">
        <input type="text" id="email"placeholder="Email"  /><br />
        <input type="password"placeholder="Create Password"  /><br />
        <input type="password" id="password"placeholder="Confirm password" required /><br />
        {/* <button >signUp</button> */}
        <button type="submit" class="signupbtn">Sign Up</button>
        <p>Already have an account? <a href="">Login</a></p>
        </form>
            </div>
        </center>
       
    </div>
  )
}

export default Sign