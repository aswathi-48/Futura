import React, { useContext } from 'react'
import { UserContext } from '../ContextReducer/Context1'


const GetData = () => {
    const {user,dispatch}=useContext(UserContext)
    const deleted = ()=>{
dispatch({type:'remove'})
    }
    console.log(user);

  return (
    <div>
      <button onClick={deleted}>delete</button>GetData</div>
  )
}

export default GetData