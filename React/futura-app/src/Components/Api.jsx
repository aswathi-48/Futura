import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Sub from './Sub'

function Api() {

    const [state,setState]=useState()

    useEffect(()=>{
        async function display(){
            const res=await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(res.data);
            setState(res.data)
        }
        display()
    },[])

    console.log('state data',state)
  return (
    <div>
        <h1>Data</h1>
        <ul>
        {state.map((user)=>(
            <li key ={user.id}>{user.name}{user.address.city}</li>
            
        ))}</ul>
        <Sub value ={state}/>
    </div>
  )
}

export default Api