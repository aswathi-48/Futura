import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { itemPage } from '../Redux/useredux';
import axios from 'axios';

const Redux1 = () => {
    const [state,setState]=useState([]);
    const dispatch=useDispatch();

    useEffect(()=>{
        async function display(){
          const res=await axios.get('https://jsonplaceholder.typicode.com/users')
          console.log(res.data);
          setState(res.data)          
       dispatch(itemPage(res.data))    //userredux.js ile functionlek data access cheyyunnu 
    
        }
        display()
        console.log('state data',state)
      },[])
  return (
    <div>Redux1</div>
  )
}

export default Redux1