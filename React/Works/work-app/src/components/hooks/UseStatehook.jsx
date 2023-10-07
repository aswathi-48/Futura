import React, { useState } from 'react'

const UseStatehook = () => {
    const [state,setState] =useState(0)

    function display(){
        setState(state+1)
    }
    function reset(){
        setState(0)
    }
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={display}>Click</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default UseStatehook