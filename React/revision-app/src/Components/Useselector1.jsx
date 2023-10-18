import React from 'react'
import { useSelector } from 'react-redux';

const Useselector1 = () => {

    const data=useSelector((state)=>state.Items.itemInfo)  

    console.log('aasdfgh',data);
  return (
    <div>Useselector</div>
  )
}

export default Useselector1