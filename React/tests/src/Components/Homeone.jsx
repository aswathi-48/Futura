import React from 'react'
import { useDispatch } from 'react-redux'
import { removeData } from '../Redux/Userredux'

const Homeone = () => {
    const dispatch=useDispatch()

    function LogoutData(){
        dispatch(removeData())
    }
  return (
    <div>
        <h1>Home page</h1>
        <button onClick={LogoutData}>LogOut</button>
    </div>
  )
}

export default Homeone