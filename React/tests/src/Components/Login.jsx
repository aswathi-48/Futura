import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { LoginData } from './Apicall';

const Login = () => {

  const dispatch=useDispatch();


    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')

    const display=()=>{
        console.log({Email,Password});
        try{
          LoginData({Email,Password},dispatch)
        }catch(err){
          console.log(err);
        }
       
    } 

    const data=useSelector((state)=>state.users.userInfo)
    console.log('**',data);

  return (
    <div>
      <div className='log-in1'>
        <div className='log-head'>
          <h2>LogIn</h2>
        </div>
        <div className='log-details'>
        <input type="text" placeholder='email' value={Email} onChange={(e)=>setEmail(e.target.value)} className='inpt-one'/>
        <input type="text" placeholder='password' value={Password} onChange={(e)=>setPassword(e.target.value)} className='inpt-two'/>
        <button onClick={display}>Login</button>

        </div>
      </div>
       
    </div>
  )
}

export default Login