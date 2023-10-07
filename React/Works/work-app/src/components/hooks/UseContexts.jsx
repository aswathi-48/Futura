import React from 'react'
import { useContext } from 'react'
import { Appcontext } from './Context'

const UseContexts = () => {
    const value= useContext(Appcontext)
  return (
    <div>
        <h1>{value}</h1>
    </div>
  )
}

export default UseContexts