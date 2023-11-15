import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Display = () => {

    const [printData,setPrintData]=useState([])

    useEffect(()=>{
        const resData= async()=>{
            const res=await axios.get("http://localhost:3000/getmethod")
            setPrintData(res.data)
            console.log(res.data);
        }
        resData()
    },[])

  return (
    <div>
         <p>
            {printData.map((li)=>(
                <>
           <li>{li.username}</li>
           {/* <li>{li.email}</li> */}
                </>
            ))}
        </p>
    </div>
  )
}

export default Display