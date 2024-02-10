import React, { useEffect, useState } from 'react'
import { CgGirl } from 'react-icons/cg'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineLockOpen } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUserProfile, updateprofileuser } from '../../../ApiCallll/ApiCall'
import './Updatepage.css'

const Updatepage = () => {
 
    const [Name,setName]=useState('')
    const [Email,setEmail]=useState('')
    // const [Password,setPassword]= useState('')
    const [Images,setImages]=useState({})

    const valuee= useSelector((state)=>state.Userrss.userrData[0])
    console.log('useselector value',valuee);

    if(valuee){
        var updId = valuee && valuee._id
        console.log('iddD',updId);
    }


    useEffect(()=>{
        async function userProfileDisplay(){
            const updateeData = await getUserProfile(updId)
            console.log('updateeData',updateeData);
            setName(updateeData.Name)
            setEmail(updateeData.Email)
            setImages(updateeData.Images)
        }userProfileDisplay()
    },[])


    const DataUpadates = async () => {
     try{
            console.log("uodatee",updId);
            const valueess = await updateprofileuser({_id: updId,Name,Email,Images});
            console.log("value*",valueess);
     }catch(err){
        console.log('update failed',err);
        console.log('************,',DataUpadates);
     }
    }
  return (
    <div>
        <div className='update'>
            <form action=""onSubmit={DataUpadates} encType='multipart/form-data'>
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
                    {/* <div className='reg-body-cntnt'>
                    <MdOutlineLockOpen className='reg-icon'/>
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

export default Updatepage