import React from 'react'

const UsecallbackTwo = (props) => {
    console.log('child rendered');
    props.value()
  return (
    <div>
        
    </div>
  )
}

export default UsecallbackTwo
export const Data=React.memo(UsecallbackTwo)