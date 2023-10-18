import React, { useState } from 'react'
import { Parentprops } from './ReactMemoChild';


const ReactMemo = () => {
    
    const [state,setState] =useState(0)
    const [state1,setState1] = useState(0)

    console.log('parent rendered');

    function show(){
        setState(state+1)
    }
    function show1(){
        setState1(state1+1)
    }
  return (
    <div>
        <h1>state:{state}</h1>
        <h1>state1:{state1}</h1>
        <button onClick={show}>Click1</button>
        <button onClick={show1}>Click2</button>
        <Parentprops value={state}/>
    </div>
  )
}

export default ReactMemo