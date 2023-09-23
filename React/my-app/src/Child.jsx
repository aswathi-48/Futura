import React from 'react'

function Child(props) {
  return (
    <div style={{backgroundColor:"yellow"}}>
        <h1>{props.value}</h1>
    </div>
  )
}

export default Child