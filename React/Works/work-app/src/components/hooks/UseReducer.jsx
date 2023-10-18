import React from 'react'
import { useReducer } from 'react';

export const UseReducer = () => {

    const InitialState=0

    const reducer=(state,action)=>{
        console.log('action',action,'state',state);
        console.log(action);
        switch (action.type) {
            case '+':
                return state=state+1
            case '-':
                return state=state-1
            case '2+':
                return state=state+2
            case '2-':
                return state=state-2    
            default:
                return state
         
        }
    }

    const [state,dispatch]=useReducer(reducer,InitialState)
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:'+'})}>+</button>
        <button onClick={()=>dispatch({type:'-'})}>-</button>
        <button onClick={()=>dispatch({type:'2+'})}>2+</button>
        <button onClick={()=>dispatch({type:'2-'})}>2-</button>


    </div>
  )
}
