import React, { useState } from 'react'
import './RegisterFile.css'
import { Link } from 'react-router-dom'
import { CgGirl } from "react-icons/cg";
import { MdOutlineLockOpen } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { AdminRegister } from '../ApiCallll/Apicall'

const RegisterFile = () => {

    const [Name,setName]=useState('')
    const [Email,setEmail]=useState('')
    const [Password,setPassword]= useState('')
    const [Images,setImages]=useState({})

    let Formdata = new FormData()
    Formdata.append('Name',Name)
    Formdata.append('Email',Email)
    Formdata.append('Password',Password)
    Formdata.append("Images",Images)


    const displyy = (e) =>{
        e.preventDefault();  
            //   console.log("***",Formdata);
        AdminRegister(Formdata)
    }


  return (
    <div className='register'>
            <form action="" onSubmit={displyy} encType='multipart/form-data'>
            <div className='reg-main'>
                <div className='reg-main-one'>
                <div className='reg-head'>
                    <h4>Register</h4>
                </div>
                <div className='reg-body'>
                    <div  className='reg-body-one'>
                    <div className='reg-body-cntnt'>
                    <CgGirl className='reg-icon'/>
                        <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='reg-body-cntnt'>
                    <HiOutlineMail className='reg-icon'/>
                        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='reg-body-cntnt'>
                    <MdOutlineLockOpen className='reg-icon'/>
                        <input type="password" placeholder='Passoword'onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='reg-body-cntnts'>
                    <input type="file"  filename="Images" onChange={(e)=>setImages(e.target.files[0])} className='img-file'/>
                    </div>
                    <div className='reg-btn'>
                        <button type='submit'>Create Account</button>
                    </div >
                    <div className='reg-para'>
                        <p>Already have an account?<Link to='/log' className='reg-link'>Login</Link></p>
                    </div>
                </div>
                </div>
                </div> 
            </div>
            </form>
        </div>
  )
}

export default RegisterFile