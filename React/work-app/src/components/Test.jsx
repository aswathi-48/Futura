import React,{useRef} from 'react'
import './Test.css'


function Test() {
    const button1 =useRef();

    const change=()=>{
        button1.current.style.backgroundColor='gray'
        button1.current.style.color='black'
        button1.current.innerHTML='<h1>I never know you Depart from me </h1> <img src="https://i.pinimg.com/originals/a5/01/ce/a501ce0879d8e42c98297f95e6c26800.jpg" alt=""><br/><button ><a href="{localhost3002}" >GoBack</a></button>'
        // button1.current.innerHTML= <img src="// https://tse2.mm.bing.net/th?id=OIP.pbJsFJEHZMn5jFUp5QDOawHaGy&pid=Api&P=0&h=180" alt="" /> 
        // button1.current.innerHTML='<img src="https://tse2.mm.bing.net/th?id=OIP.AljK2Z50fJjE6P8qakgXpQHaE8&pid=Api&P=0&h=180" alt="">'
    }
 
  return (
    <div>
        <div className='main' style={{backgroundColor:"whitesmoke"}}>
        <div ref={button1}>
            <h1>Hello Welcome</h1>
            <img  src="https://c.pxhere.com/photos/80/77/welcome_sign_garden_sign_garden_decor_welcome_home_welcome_home_sign_message-730692.jpg!d" alt="" width={1000} /> <br /> 
            <button onClick={change} style={{color:'green',fontSize:26}}>TouchMe</button>
        </div>
        {/* <div>
            <a href="localhost3002"></a>
        </div> */}

        </div>
        
    </div>
  )
}

export default Test



// History of the Synod of Washington of the Presbyterian Church in the United States of America, 1835-1909
