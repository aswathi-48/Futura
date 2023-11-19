import React, { useEffect, useState } from 'react'
import { DeleteIdData, GetIdData, UpdateIdData } from './Apicall';


const SingleData = () => {

    const [singleData,setSingleData]=useState('')
    const [data,setData]=useState({});



    const [FirstName,setFirstName]=useState('')
    const [SecondName,setSecondName]=useState('')
    const [Age,setAge]=useState('')
    const [Address,setAddress]=useState('')
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')

    const handleInputChange=(event)=>{
        setSingleData(event.target.value);
    };

    console.log('data?'.data);
    const handleSubmit =async ()=>{
        try{
            console.log('Id submited',singleData);
            const a =await GetIdData(singleData);
            console.log('*****8***',a);
            setData(a)
        }catch(err){
            console.log("error",err);
        }
    }
    console.log('1111',data);


    useEffect(()=>{
        setFirstName(data.FirstName)
        setSecondName(data.SecondName)
        setAge(data.Age)
        setAddress(data.setAddress)
        setEmail(data.setEmail)
        setPassword(data.Password)
    },[data])


    //to delete data
    const deleteSubmit=async()=>{  
        try{
                console.log('profile id deleted',singleData);
                DeleteIdData(singleData)
                
        }catch(err){
            console.log("Error fetching",err);
        }
    }


    //to update

    const updateSubmit = async () => {
        try {
            console.log('profile id updated', singleData);
            UpdateIdData(singleData, { FirstName, SecondName, Age,Address, Email,Password })

        } catch (err) {
            console.log(err);
        }
    }
  return (
    <div>
        <div className='main1'>
            <div>
                <span>
                    <input type="text" placeholder='enter the id'  value={singleData} onChange={handleInputChange}/>
                </span>
                <span>
                    <button onClick={handleSubmit}>Submit</button>
                </span>
                <span>
                    <button onClick={deleteSubmit}>Delete</button>
                </span>
                <span>
                    <button onClick={updateSubmit}>Update</button>
                </span>
            </div>
            <input type="text" placeholder={data.FirstName} value={FirstName} onChange={(e)=>setFirstName(e.target.value)} />
        <input type="text" placeholder={data.SecondName} value={SecondName} onChange={(e)=>setSecondName(e.target.value)} />
        <input type="text" placeholder={data.Age}  value={Age} onChange={(e)=>setAge(e.target.value)} />
        <input type="text" placeholder={data.Address} value={Address} onChange={(e)=>setAddress(e.target.value)} />
        <input type="text" placeholder={data.Email} value={Email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder={data.Password} value={Password} onChange={(e)=>setPassword(e.target.value)} />        </div>
    </div>
  )
}

export default SingleData

