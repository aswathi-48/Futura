import React, { useState } from 'react'
import styled from 'styled-components'
import Child from './Child'


const Main=styled.div`
background-color: #4c00ff;
`
function Style() {
    const [state,setState]=useState(0)

    function display(){
        setState(state+1)
    }
    function reset(){
        setState(0)
    }

  return (
    <Main style={{color:'black'}}>
        <h1>{state}</h1>
        <button onClick={display}>Clicked</button>
        <button onClick={reset}>Reset</button>
        <Child value={state}/>

    </Main>
  )
}

export default Style