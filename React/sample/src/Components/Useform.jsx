import React,{useState} from 'react'

const Useform = () => {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [mobile,setMobile]=useState()

    const display=(e)=>{
        e.preventDefault();  
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(mobile);


    }

  return (          
    <div>
        <form onSubmit={display}>
        <input type="name" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input type="mobile" placeholder='mobile'value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
        {/* <button onClick={display}>Submit</button> */}
        <input type="submit" />
        </form>

    </div>
  )
}


export default Useform