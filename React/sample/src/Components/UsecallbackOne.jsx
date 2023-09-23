 import React, { useState,useCallback } from 'react'
import {Data} from "./UsecallbackTwo";

const UsecallbackOne = () => {
    const [state,setState]=useState(0);
    console.log("parent rendered");
    function show(){
        setState(state+1);
    }
    
    const Handileclick=()=>{}
    const Memorizedclick = useCallback(Handileclick,[state])
  return (
    <div>
        
        <button onClick={show}>Click</button>
        
        <h1>{state}</h1>
        <Data value={Memorizedclick}/>

    </div>
  )
}

export default UsecallbackOne