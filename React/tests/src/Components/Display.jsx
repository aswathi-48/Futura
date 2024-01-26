import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Display = () => {

    const [printData,setPrintData]=useState([])
    const[data,setData]=useState([])


    // useEffect(()=>{
    //     const resData= async()=>{
    //         const res=await axios.get("http://localhost:3000/getmethod")
    //         setPrintData(res.data)
    //         console.log(res.data);
    //     }
    //     resData()
    // },[])

    const displayHandler=async()=>{
    const res=await axios.get("http://localhost:7000/getmethod")
    setPrintData(res.data)
    }
    

  return (
    <div>
         <p>
            {printData.map((li)=>(
                <>
           <li>{li.FirstName}</li>
           <li>{li.Email}</li>
                </>
            ))}
        </p>
        <button onClick={displayHandler}>click</button>
    </div>
  )
}

export default Display