
import React, {useRef} from 'react'
import './Changebuttonclr.css'


function Changebuttonclr() {
    const button1 = useRef();
    const button2 = useRef();
    const button3 = useRef();


    function btn1(){
        if(button1.current)
        button1.current.style.backgroundColor = 'red';
        button2.current.style.backgroundColor='black';
        button3.current.style.backgroundColor='black';
    }

    function btn2(){
      if(button2.current)
        button2.current.style.backgroundColor = 'red';
        button1.current.style.backgroundColor='black';
        button3.current.style.backgroundColor='black';
    }

    function btn3(){
      if(button3.current)
      button3.current.style.backgroundColor = 'red';
      button2.current.style.backgroundColor='black';
      button1.current.style.backgroundColor='black';
  }
  return (
    <div className='btnclr'>
      
        <div ref={button1}>
        <button onClick={btn1}>Click</button>
        </div>
        <div className='one'>
        <div ref={button2}>
        <button onClick={btn2}>Click</button>
        </div>
        </div>
        <div className='two'>
        <div ref={button3}>
        <button onClick={btn3}>Click</button>
        </div>
        </div>
    </div>
  )
}

export default Changebuttonclr



// import React, { useState,useRef } from "react";

// function Home() {
//        const button1 = useRef();
//        const button2 =useRef()
//   const [buttonColor, setButtonColor] = useState(true);
//   const handleClick = () => {
//     setButtonColor(!buttonColor);

//     function btn2(){
//       if(button2.current)
//       button2.current.style.buttonColor= 'yellow'
//     }     
//   };

//   function btn1(){
//             if(button1.current)
//             button1.current.style.backgroundColor = 'yellow';
            
    
//         }
   
    
  
  

//   return (
//     <div className="center">
//       <div ref={button1}>
//       <button onClick={handleClick}style={{ backgroundColor: buttonColor ? "red" : "white" }}>click</button>
//       </div>
//     </div>
//   );
// }

// export default Home;