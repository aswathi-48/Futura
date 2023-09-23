import React from 'react'

export const ReactTwo = (props) => {

    console.log('child rendered');
  return (
    <div>
        <h2>React two:State :{props.value}</h2>
    </div>
  )
}
export default ReactTwo
export const Abcdefg=React.memo(ReactTwo)
