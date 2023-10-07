import React, { useState } from 'react'
import './Signuppage.css';
import { signupdata } from '../Redux/Localstorage'
import { useDispatch } from 'react-redux'
// import { FaEye } from 'react-icons/fa';
// import { FaEyeSlash } from 'react-icons/fa';



const Signuppage = () => {

  // const [showPassword, setShowPassword] = useState(false);


  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;



    const formData = {
      name,
      email,
      password
    };

    dispatch(signupdata(formData));

    console.log('signup data submited', formData);
  };




  return (

    <div>
      <div className='header'>
        <div className='titile'>
          <h1>SignUp</h1>
        </div>
        <div className='body'>
          <form onSubmit={handleFormSubmit}>
            <div className='data1'>
              <label htmlFor="name">Name:</label>
              <input type="text" id='name' name='name' placeholder='Enter your name' required />
            </div>
            <div className='data1'>
              <label htmlFor="email">Email:</label>
              <input type="text" id='email' name='email' placeholder='Enter your email' required />
            </div>
            <div className='data2'>
              <label htmlFor="password">Password:</label>
              <input type="password"id='password' name='password' placeholder='Enter your password' />
              {/* <div className='password-input-container'>
            <input type={showPassword ? 'text' : 'password'} id='password' placeholder="Enter your Password"/>
            <span onClick={togglePasswordVisibility}  style={{backgroundColor:'#f1f1f1'}}>{showPassword ? <FaEyeSlash style={{background:'#f1f1f1', color:'black'}}/> : <FaEye style={{background:'#f1f1f1', color:'black'}}/>}</span>
            </div>
          </div> */}
              {/* <div className='passwoord-block'>
                <input type={showPassword ? 'text' : 'password'} id='password' placeholder="Enter your Password" /><FaEyeSlash className='eye-icon'/>
              </div> */}
            </div>
            <div className='btnn8'>
              <button type='submit'>Sign Up</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Signuppage



// import React, { useState } from 'react';
// import './Signuppage.css';
// import { signupdata } from '../Redux/Localstorage';
// import { useDispatch } from 'react-redux';

// const Signuppage = () => {
//   const dispatch = useDispatch();

// Declare password and showPassword states outside of handleFormSubmit
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     const formData = {
//       name,
//       email,
//       password,
//     };

//     dispatch(signupdata(formData));

//     console.log('signup data submitted', formData);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div>
//       <div className="header">
//         <div className="title">
//           <h1>SignUp</h1>
//         </div>
//         <div className="body">
//           <form onSubmit={handleFormSubmit}>
//             <div className="data1">
//               <label htmlFor="name">Name:</label>
//               <input type="text" id="name" name="name" placeholder="Enter your name" required />
//             </div>
//             <div className="data2">
//               <label htmlFor="email">Email:</label>
//               <input type="text" id="email" name="email" placeholder="Enter your email" required />
//             </div>
//             <div className="data3">
//               <label htmlFor="password">Password:</label>
//               <input
//                 type={showPassword ? 'text' : 'password'} // Conditional input type
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//                 required
//               />
//               <button type="button" onClick={togglePasswordVisibility}>
//                 {showPassword ? 'Hide' : 'Show'} Password
//               </button>
//             </div>
//             <div className="btnn8">
//               <button type="submit">Sign Up</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signuppage;
