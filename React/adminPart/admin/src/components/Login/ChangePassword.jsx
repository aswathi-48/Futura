import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { changePassword } from '../ApiCallll/Apicall';

const ChangePassword = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const userId = location.state?.Id || '' ;
  console.log(userId,'useridddd');

    const [Password,setPassword] = useState('')
    const [confirm,setConfirm]=useState('')
    const [error, setError] = useState(null);

    const submit = async () => {
      if(Password !== confirm){
        setError('Passwords do not match');
        return;
      }
        try{
          const data = await changePassword({userId,Password})
          console.log(data,'dataaaa');
          setTimeout(() => {
            navigate('/',{state:{userId,Password}})
          }, 1000);
        }catch(err){
          console.log(err);
          setError(error.response.data.error || 'An error occurred');

        }

    }

  return (
    <div className="loginsignup">
    <div className="loginsignup-container">
      <h1>Change Password</h1>
      {/* <form action=""> */}
      <div className="loginsignup-fields">
       
        <input type="password" placeholder="Password" className='input-focused' onChange={(e)=>setPassword(e.target.value)}  />
        <input type="password" placeholder="confirm Password" className='input-focused' onChange={(e)=>setConfirm(e.target.value)} />
      </div>
      <button onClick={submit}>Submit</button>
      {/* </form> */}

      {error && <p className="error">{error}</p>}
      
    </div>
  
</div>  )
}

export default ChangePassword