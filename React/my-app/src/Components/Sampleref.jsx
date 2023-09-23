// import React from 'react'
// import Useref from '../Userefsamp'

// function Sampleref() {
//     const a=Useref()
//     function show(){
//         a.current.style.backgroundColor='green'
//     }
//   return (
//     <div>
//         <h1 ref={a}>haiiii</h1>
//         <button onClick={show}>Click</button>
//     </div>
//   )
// }

// export default Sampleref

import React, {useEffect, useRef} from "react"

function Userefhook() {
    const Sampleref=useRef()
    const Sampleref1=useRef()
    const input1=useRef()

    useEffect(()=>{
      input1.current.focus()
    },[])

    const show=()=>{
        Sampleref.current.style.backgroundColor='green'
        Sampleref1.current.style.color='white'
        Sampleref1.current.innerText='WELCOME'
        Sampleref.current.innerHTML='<h1>Hello Guys...</h1>'
    }
  return (  
    <div ref={Sampleref}>
        <h1 ref={Sampleref1}>helloo..</h1>
        <button onClick={show}>Click</button>

        <div>
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="age"/>
          <input ref={input1} type="text" placeholder="domain"/>
          <input type="text" placeholder="address"/>
          <input type="text" placeholder="state"/>

        </div>
    </div>

  
  )
}

export default Userefhook