import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [state,setState] =useState(0)
    const [state1,setState1] =useState(0)

    const display=()=>{
        setState(state+1)
    }
    const isEven=useMemo(()=>{
        let i=0
        while(i<2000000000)
        i++
    return state%2==0
    },[state]);

    console.log('is even value',isEven);
    const display1=()=>{
        setState1(state1+1)
    }
  return (
    <div>
        <button onClick={display}>{state}</button>
        <button onClick={display1}>{state1}</button>

    </div>
  )
}

export default UseMemoHook