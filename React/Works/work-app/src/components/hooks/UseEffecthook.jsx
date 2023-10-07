import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseEffecthook = () => {
    const [state,setState]=useState(0)
    useEffect(()=>{
        console.log('sucessfull');

    },[])
  return (
    <div>
        <h1>{state}</h1>
        <button onCanPlay={()=>setState(state+1)}>click</button>
    </div>
  )
}

export default UseEffecthook