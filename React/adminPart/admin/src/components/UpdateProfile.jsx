import React, { useEffect, useState } from 'react'
import { CgGirl } from 'react-icons/cg'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineLockOpen } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './UpdateProfile.css'
import { getadminprofile,  updateProfiles } from './ApiCallll/Apicall'

const UpdateProfile = () => {

    // const [data, setData] = useState([])

    const [Name,setName]=useState('')
    const [Email,setEmail]=useState('')
    // const [Password,setPassword]= useState('')
    const [Images,setImages]=useState({})


    const value = useSelector((state) => state.AdminUser.adminData[0])
    console.log('***',value);

    if(value) {
        var upIdd = value && value._id
        console.log('idddd',upIdd);
    }

    useEffect(()=>{
        async function profileDispaly(){

            const dataUpdate = await getadminprofile(upIdd)
            console.log("dataupdateee",dataUpdate);   
            setName(dataUpdate.Name);
            setEmail(dataUpdate.Email);
            setImages(dataUpdate.Images)
        }profileDispaly()
    },[])


    // let formdataa = new FormData()
    // formdataa.append('Name',Name)
    // formdataa.append('Email',Email)
    // formdataa.append('Password',Password)
    // formdataa.append("Images",Images)

    // const updateDatas =(e) =>{
    //     e.preventDefault();  
    //     updateProfiles(formdataa)
    // }


    const updateDatas = async ()=>{
        try {
            console.log("updateeeee", upIdd);
            const datasss = await updateProfiles({ _id: upIdd, Name,Email,Images });
            // console.log('Updated successfully!');
            console.log('data1111', datasss);
           
      
          } catch (err) {
            console.error('Update failed:', err);
          }
    }


  return (
    <div className='maindiv-'>
         <div className='update'>
            <form action="" onSubmit={updateDatas} encType='multipart/form-data'>
            <div className='upd-main'>
                <div className='upd-main-one'>
                <div className='upd-head'>
                    <h4>Update</h4>
                </div>
                <div className='upd-body'>
                    <div  className='upd-body-one'>
                    <div className='upd-body-cntnt'>
                    <CgGirl className='upd-icon'/>
                        <input type="text" value={Name} placeholder='name' onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='upd-body-cntnt'>
                    <HiOutlineMail className='upd-icon'/>
                        <input type="email" value={Email} placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {/* <div className='upd-body-cntnt'>
                    <MdOutlineLockOpen className='upd-icon'/>
                        <input type="password" placeholder='Passoword'onChange={(e) => setPassword(e.target.value)} />
                    </div> */}
                    <div className='upd-body-cntnts'>
                    <input type="file"  filename="Images"   onChange={(e)=>setImages(e.target.files[0])} className='img-file'/>
                    </div>
                    <div className='up-btn'>
                        <button type='submit'>Update</button>
                    </div >
                   
                </div>
                </div>
                </div> 
            </div>
            </form>
        </div>
    </div>
  )
}

export default UpdateProfile