import React, { useEffect, useState } from 'react'
import { signupdata } from './Apicall'
import axios from 'axios'
import './Signup.css'

const Signup = () => {

    const [FirstName,setFirstName]=useState('')
    const [SecondName,setSecondName]=useState('')
    const [Age,setAge]=useState('')
    const [Address,setAddress]=useState('')
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const [printData,setPrintData]=useState([])
    
    useEffect(()=>{
        const resData= async()=>{
            const res=await axios.get("http://localhost:3000/getmethod")
            setPrintData(res.data)
            console.log(res.data);
        }
        resData()
    },[])

    const display=async()=>{
        signupdata({FirstName,SecondName,Age,Address,Email,Password})
        // const res =await axios.get("http://localhost:3000/getmethod")
        // console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',res);
        // setPrintData(res.data)
    

    }

  return (
    <div >
        <div className='in-puts'>
        <input type="text" placeholder='firstName' value={FirstName} onChange={(e)=>setFirstName(e.target.value)} />
        <input type="text" placeholder='SecondName' value={SecondName} onChange={(e)=>setSecondName(e.target.value)} />
        <input type="text" placeholder='age' value={Age} onChange={(e)=>setAge(e.target.value)} />
        <input type="text" placeholder='address' value={Address} onChange={(e)=>setAddress(e.target.value)} />
        <input type="text" placeholder='email' value={Email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder='password' value={Password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={display}>Submit</button>
        <p>
            {printData.map((li)=>(
                <>
           <li>{li.username}</li>
                </>
            ))}
        </p>
        </div>
    </div>
  )
}

export default Signup