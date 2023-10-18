import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

export const UseMemohook = () => {
    const [state,setState]=useState(0)
    const [state1,setState1]=useState(0)

    const display=()=>{
        setState(state+1)
    }
    const display1=()=>{
        setState1(state1+1)
    }
    const isEven =useMemo(()=>{
        let i=0
        while(i<=20000000)
        i++
    return state%2==0
     },[state])

    // console.log('iseven value',isEven);
    //     const display1=()=>{
    //         setState1(state1+1)
        // }
  return (
    <div>
        <button onClick={display}>{state}</button>
        <span>{isEven ? 'Even' : 'odd'}</span>
        <button onClick={display1}>{state1}</button>
    

    </div>
  )
}
