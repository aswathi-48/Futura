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
    const[id,setId]=useState("")
    const [printSingleData,setPrintSingleData]=useState({})
    

    const display= async()=>{
        signupdata({FirstName,SecondName,Age,Address,Email,Password})
        // const res =await axios.get(`http://localhost:3000/singledata/${id}`)
        // console.log(res.data);
        // setPrintSingleData(res.data)
        

    }

  return (
    <div >
        <div className='in-puts'>
           {/* id <input type="text" value={id} onChange={(e)=>setId(e.target.value)} /> */}
        <input type="text" placeholder='firstName' value={FirstName} onChange={(e)=>setFirstName(e.target.value)} />
        <input type="text" placeholder='SecondName' value={SecondName} onChange={(e)=>setSecondName(e.target.value)} />
        <input type="text" placeholder='age' value={Age} onChange={(e)=>setAge(e.target.value)} />
        <input type="text" placeholder='address' value={Address} onChange={(e)=>setAddress(e.target.value)} />
        <input type="text" placeholder='email' value={Email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder='password' value={Password} onChange={(e)=>setPassword(e.target.value)} />
        
        
        <button onClick={display}>Submit</button>
      
        </div>
        {/* <div>
           <li> {printSingleData.FirstName}</li>
           <li>{printSingleData.setSecondName}</li>
           <li> {printSingleData.Age}</li>
           <li>{printSingleData.Address}</li>
           <li>{printSingleData.Email}</li>
           <li>{printSingleData.Password}</li>
        </div> */}
        
    </div>
  )
}

export default Signup