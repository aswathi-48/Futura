import React, { useEffect,useState } from 'react'
import axios from 'axios'

const Redux = () => {
    const [state,setstate] = useState([]);

  useEffect(()=>{
    async function display(){
      const res=await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(res.data);
      setstate(res.data)
    }
    display()
    console.log('state data',state)
  },[])
  return (
    <div></div>
  )
}

export default Redux