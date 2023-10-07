import React from 'react'
import {useDispatch} from 'react-redux'

const Remove = () => {
    const dispatch=useDispatch()
    const display=()=>{
        dispatch(removeData())
    }
  return (
    <div>
        <button onClick={display}></button>
    </div>
  )
}

export default Remove



//used to remove data to the localstorage

//first we create a function RemoveData() to the createslice page (Useredux.js)

//redux.jsx fileilum ee functions koduth localhost clear aaakkam