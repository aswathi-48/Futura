import React, { useContext } from 'react'
import { Appcontext } from './Context'
import Sample3 from './Sample3'

function Sample2() {
  const value = useContext(Appcontext)
  return (
   <link to={Sample3}> <div>
      <h1>{value}</h1>
      <h1>hai</h1>
        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, ratione.</h3>
    </div>
    </link>
  )
}

export default Sample2