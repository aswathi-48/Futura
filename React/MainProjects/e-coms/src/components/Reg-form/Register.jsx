import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Reg-form/Register.css'
import { CgGirl } from "react-icons/cg";
import { MdOutlineLockOpen } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { registerValue } from '../ApiCallll/ApiCall';


const Register = () => {

    const [Name ,setName] = useState('')
    const [Email,setEmail]= useState('')
    const [Password,setPassword] = useState('')
    const [Images,setImages] = useState({})


     let formData = new FormData()
     formData.append ('Name', Name)
     formData.append ('Email', Email)
     formData.append ('Password', Password)
     formData.append ("Images",Images)

    const display = (e) =>{
      e.preventDefault();
        // registerValue({Name,Email,Password})

        console.log("form dtaaaaaa",formData);
        registerValue(formData)
    }

    return (
        <div className='register'>
            <form onSubmit={display} encType='multipart/form-data'>
            <div className='reg-main'>
                <div className='reg-main-one'>
                <div className='reg-head'>
                    <h4>Register</h4>
                </div>
                <div className='reg-body'>
                    <div  className='reg-body-one'>
                    <div className='reg-body-cntnt'>
                    <CgGirl className='reg-icon'/>
                        <input type="text" placeholder='Name' value={Name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='reg-body-cntnt'>
                    <HiOutlineMail className='reg-icon'/>
                        <input type="email" placeholder='Email' value={Email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='reg-body-cntnt'>
                    <MdOutlineLockOpen className='reg-icon'/>
                        <input type="password" placeholder='Passoword' value={Password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='reg-body-cntnts'>
                    <input type="file"  filename="Images" onChange={(e)=>setImages(e.target.files[0])} className='img-file'/>
                    </div>
                    <div className='reg-btn'>
                        <button type='submit'>Create Account</button>
                    </div>
                    <div className='reg-para'>
                        <p>Already have an account?<Link to='/login' className='reg-link'>Login</Link></p>
                    </div>
                </div>
                </div>
                </div> 
            </div>
            </form>
        </div>
    )
}

export default Register