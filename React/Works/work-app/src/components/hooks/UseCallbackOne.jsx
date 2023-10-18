import React, { useCallback, useState } from 'react'
import { Parentprops } from './ReactMemoChild';

const UseCallbackOne = () => {

    const [state,setState] = useState(0)
    const [state1,setState1] = useState(0)

    console.log('parent rendered');

    function show(){
        setState(state+1)
    }
    function show1(){
        setState1(state1+1)
    }
    const Handleclick=()=>{}
    const Memorizedclick=useCallback(Handleclick,[state])
  return (
    <div>
        <h3>state:{state}</h3>
        <h3>state1:{state1}</h3>
        <button onClick={show}>Click</button>
        <button onClick={show1}>Click1</button>
        <Parentprops value={Memorizedclick}/>

    </div>
  )
}

export default UseCallbackOne