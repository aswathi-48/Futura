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
        <input type="text" placeholder='email' value={Email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder='password' value={Password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={display}>Login</button>

    </div>
  )
}

export default Login