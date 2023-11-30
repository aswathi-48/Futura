import React from 'react'
import { useSelector } from 'react-redux'
import './Profile.css'

export const Profile = () => {
    const data=useSelector((state)=>state.userss.userValue)
    console.log('***',data);
  
  return (
    <>
        <div className='P-container'>
          <div className='p-contents'>
            <h1>User Details...</h1>
            <div className='p-items'> 
            {/* {
            data.length > 0 && (
        <p>
          Email: {data[0].email}, data: {data[0]._id}
        </p>
      )} */}
      {
        data.map((datas)=>{
            return(
                <div className='valuess'>
                <h2>{datas.FirstName}</h2>
                <h2>{datas.Email}</h2>
                <h2>{datas.Phone}</h2>
                </div>

            )
        })
      }
            </div>
          </div>
         
       </div>
    </>
  )
}
