import React from 'react'

const UseCallbackTwo = (props) => {
    console.log('child rendered');
  return (
    <div>
        <h4>UseCallbackTwo : State:{props.value}</h4>
    </div>
  )
}

export default UseCallbackTwo
export const Parentprops=React.memo(UseCallbackTwo)