import React, { useState } from 'react'
import { forgotPass } from '../ApiCallll/ApiCall'
import { useNavigate } from 'react-router-dom'
import './Forgott.css'
const ForgotPass = () => {

  const navigate = useNavigate()
  const [Email,setEmail]  = useState()

  const sendMail = async()=>{
    try{
       const data = await forgotPass({Email})
       const otp = data
       console.log("otppppppppppp",otp);
       setTimeout(()=>{
        navigate('/verify',{state:{otp}})
       },1000)
    }catch(err){console.log(err);}
  }
// forgotPassword()
  return (
    <div>
 <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>forgot password</h1>
          <div className="loginsignup-fields">
            <input type="email" placeholder="type your Email Address" className='input-focused' onChange={(e)=>setEmail(e.target.value)}/>
            {/* <input type="password" placeholder="Password" className='input-focused' onChange={(e)=>setPassword(e.target.value)} /> */}
          </div>
          <button onClick={sendMail}>send</button>
          
        </div>
       
      </div>

    </div>
  )
}

export default ForgotPass