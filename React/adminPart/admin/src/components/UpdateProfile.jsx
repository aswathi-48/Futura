import React, { useEffect, useState } from 'react'
import { CgGirl } from 'react-icons/cg'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineLockOpen } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
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
    <div>
         <div className='register'>
            <form action="" onSubmit={updateDatas} encType='multipart/form-data'>
            <div className='reg-main'>
                <div className='reg-main-one'>
                <div className='reg-head'>
                    <h4>Update</h4>
                </div>
                <div className='reg-body'>
                    <div  className='reg-body-one'>
                    <div className='reg-body-cntnt'>
                    <CgGirl className='reg-icon'/>
                        <input type="text" value={Name} placeholder='name' onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='reg-body-cntnt'>
                    <HiOutlineMail className='reg-icon'/>
                        <input type="email" value={Email} placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {/* <div className='reg-body-cntnt'>
                    <MdOutlineLockOpen className='reg-icon'/>
                        <input type="password" placeholder='Passoword'onChange={(e) => setPassword(e.target.value)} />
                    </div> */}
                    <div className='reg-body-cntnts'>
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