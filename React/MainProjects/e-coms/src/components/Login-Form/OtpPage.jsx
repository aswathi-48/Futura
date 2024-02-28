import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const OtpPage = () => {
// const id = useParams()
// console.log(id.UserId);
  const location = useLocation();
  const FromForgot = location.state?.otp || '' ;
  console.log('otpppppppp',FromForgot);
  const Id = FromForgot.UserId
  // const Id = location.state?.UserId || ''
  const otpFromForgot = FromForgot.otp
  console.log('oUIDFHhs',otpFromForgot);
  const[otp,setOtp]=useState('')
console.log("idddddddddddddddddddd",Id);
  const navigate = useNavigate()

  const verify= ()=>{
      if (otpFromForgot === otp) {
          navigate('/changePage',{state: {Id} });
         
      } else {
          console.log('Invalid OTP');
          // Handle invalid OTP here (e.g., show error message)
      }


  }


  return (
    <div>

    <div className="loginsignup">
            <div className="loginsignup-container">
              <h1>verify otp</h1>
              <div className="loginsignup-fields">
                <input type="number" placeholder="OTP" className='input-focused' onChange={(e)=>setOtp(e.target.value)}/>
                {/* <input type="password" placeholder="Password" className='input-focused' onChange={(e)=>setPassword(e.target.value)} /> */}
              </div>
              <button onClick={verify}>Verify</button>
              
            </div>
           
          </div>
    
        </div>
  )
}

export default OtpPage