import React, { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux';      //usedispatchine import cheyyuka
import axios from 'axios'
import { userPage } from '../Redux/Useredux';

const Redux = () => {
    const [state,setstate] = useState([]);

const dispatch=useDispatch();  //just dispatch enna variablene declare cheyyunnu

  useEffect(()=>{
    async function display(){
      const res=await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(res.data);
      setstate(res.data)

   dispatch(userPage(res.data))    //userredux.js ile functionlek data access cheyyunnu 

    }
    display()
    console.log('state data',state)
  },[])
  return (
    <div>
      
    </div>
  ) 
}

export default Redux






