import React, { useEffect, useState } from 'react'
import './User.css'
import { DeleteUserData, userss } from './ApiCallll/Apicall';

const User = () => {

  const [value, setValue] = useState([]);

  useEffect(() => {
    const TogetData = async () => {
      try {
        const res = await userss();
        console.log('useeffect in user res data', res.data);
        setValue(res.data);
      } catch (err) {
        console.log('err', err);
      }

    }
    TogetData()
  }, [])


  const DeleteData = async (id) => {
    console.log('delete use id',id);
    try{
      DeleteUserData(id)
      // console.log(DeleteData);
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='user'>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {value.map((item) => (
          <tr key={item.id}>
            <td>{item.Name}</td>
            <td>{item.Email}</td>
            <button onClick={()=> DeleteData(item._id)}>remove</button>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default User


