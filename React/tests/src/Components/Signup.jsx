import React, { useEffect, useState } from 'react'
import { signupdata } from './Apicall'
// import axios from 'axios'
import './Signup.css'

const Signup = () => {


    const [FirstName,setFirstName]=useState('')
    const [SecondName,setSecondName]=useState('')
    const [Age,setAge]=useState('')
    const [Address,setAddress]=useState('')
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const[id,setId]=useState("")
    const [printSingleData,setPrintSingleData]=useState({})
    

    const display= async()=>{
        signupdata({FirstName,SecondName,Age,Address,Email,Password})
        // const res =await axios.get(`http://localhost:3000/singledata/${id}`)
        // console.log(res.data);
        // setPrintSingleData(res.data)
        
    }
  return (
    <div >
        <div className='in-puts'>
           {/* id <input type="text" value={id} onChange={(e)=>setId(e.target.value)} /> */}
        <input type="text" placeholder='firstName' value={FirstName} onChange={(e)=>setFirstName(e.target.value)} />
        <input type="text" placeholder='SecondName' value={SecondName} onChange={(e)=>setSecondName(e.target.value)} />
        <input type="text" placeholder='age' value={Age} onChange={(e)=>setAge(e.target.value)} />
        <input type="text" placeholder='address' value={Address} onChange={(e)=>setAddress(e.target.value)} />
        <input type="text" placeholder='email' value={Email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder='password' value={Password} onChange={(e)=>setPassword(e.target.value)} />
        
        
        <button onClick={display}>Submit</button>
      
        </div>
    </div>
  )
}

export default Signup



// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { signupdata } from './Apicall';

// const Signup = () => {
//   const dispatch = useDispatch();
//   const userData = useSelector((state) => state);

//   const handleChange = (field, value) => {
//     dispatch({ type: 'SET_USER_DATA', payload: { [field]: value } });
//   };

//   const display = async () => {
//     signupdata(userData);
//   };

//   return (
//     <div>
//       <div className='in-puts'>
//         <input
//           type='text'
//           placeholder='firstName'
//           value={userData.FirstName}
//           onChange={(e) => handleChange('FirstName', e.target.value)}
//         />
//         <input
//           type='text'
//           placeholder='SecondName'
//           value={userData.SecondName}
//           onChange={(e) => handleChange('SecondName', e.target.value)}
//         />
//         <input
//           type='text'
//           placeholder='age'
//           value={userData.Age}
//           onChange={(e) => handleChange('Age', e.target.value)}
//         />
//         <input
//           type='text'
//           placeholder='address'
//           value={userData.Address}
//           onChange={(e) => handleChange('Address', e.target.value)}
//         />
//         <input
//           type='text'
//           placeholder='email'
//           value={userData.Email}
//           onChange={(e) => handleChange('Email', e.target.value)}
//         />
//         <input
//           type='text'
//           placeholder='password'
//           value={userData.Password}
//           onChange={(e) => handleChange('Password', e.target.value)}
//         />
//         <button onClick={display}>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default Signup;
