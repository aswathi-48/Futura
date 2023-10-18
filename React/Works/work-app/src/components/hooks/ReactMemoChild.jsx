import React from 'react'

const ReactMemoChild = (props) => {

    console.log('child rendered');
  return (
    <div>
        <h2>ReactmemoChild:State:{props.value}</h2>
    </div>
  )
}

export default ReactMemoChild
export const Parentprops=React.memo(ReactMemoChild)