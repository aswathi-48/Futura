import React ,{useEffect, useState} from 'react'
import { useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../ContextReducer/Context1'

const Dispatch1 = () => {
  const[state,setState] =useState([])
    const {dispatch}=useContext(UserContext)

    useEffect(()=>{
        async function display(){
          const res=await axios.get('https://jsonplaceholder.typicode.com/users')
          console.log(res.data);
          setState(res.data)
    
       dispatch({type:'Loginsuccess',payload:(res.data)})    //userredux.js ile functionlek data access cheyyunnu 
    
        }
        display()
        console.log('state data',state)
      },[])

      const Remove=()=>{
         dispatch({type:'remove'})
      }

      // const Remove=()=>{
      //   localStorage.clear()
      // }
   return (
    <div>Dispatch1
      <button onClick={Remove}>Click</button>
      {/* <button onClick={Remove}>Clear</button> */}

    </div>
  )
}

export default Dispatch1