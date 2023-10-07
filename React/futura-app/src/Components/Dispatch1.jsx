import React ,{useEffect} from 'react'
import { useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../ContextReducer/Context1'
import { type } from '@testing-library/user-event/dist/type'

const Dispatch1 = () => {
    const {dispatch}=useContext(UserContext)

    useEffect(()=>{
        async function display(){
          const res=await axios.get('https://jsonplaceholder.typicode.com/users')
          console.log(res.data);
          setstate(res.data)
    
       dispatch({type:'Loginsuccess',payload:(res.data)})    //userredux.js ile functionlek data access cheyyunnu 
    
        }
        display()
        console.log('state data',state)
      },[])
  return (
    <div>Dispatch1</div>
  )
}

export default Dispatch1