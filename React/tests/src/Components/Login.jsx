import React, { useState } from 'react'

const Login = () => {

    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')

    const display=()=>{
        console.log({Email,Password});
    }

  return (
    <div>
        <input type="text" placeholder='email' value={Email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder='password' value={Password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={display}>Login</button>

    </div>
  )
}

export default Login