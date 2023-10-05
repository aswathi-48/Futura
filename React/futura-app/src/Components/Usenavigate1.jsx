import React from 'react'
import { useNavigate } from 'react-router-dom'

const Usenavigate1 = () => {
    const navigate=useNavigate()
    const display =()=>{
        navigate('/sample3')
    }
 
  return (
    <div>
        <button onClick={display}>Click</button>
    </div>
  )
}

export default Usenavigate1