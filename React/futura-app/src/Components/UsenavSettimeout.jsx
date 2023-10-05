import React from 'react'
import { useNavigate ,useParams} from 'react-router-dom'

const UsenavSettimeout = () => {
    const navigate=useNavigate()
    const {id}= useParams()

    setTimeout(()=>{
        navigate('/sample3')   //time delay varuthan   ,3s shesham naxt page automatically run avum
    },3000)
  return (
    <div>
        <h1>{id}</h1>
     </div>
  )
}

export default UsenavSettimeout


