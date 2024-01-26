import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Displayy.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getadminprofile } from './ApiCallll/Apicall'

const Displayy = () => {
  const [data123, setData] = useState([])
  // const [val,setVal] = useState([])

  const data = useSelector((state) => state.AdminUser.adminData[0])
  console.log('***', data);
  
  if(data){
    var id = data && data._id
    console.log('iddd',id);
  }


  useEffect(() => {
      const userData = async() => {
      // setData([data]); // Wrap data in an array if you want to use map later
      const dataa = await getadminprofile(id)
      console.log('dataaaaaaaaaaaaaaa',dataa);
      setData(dataa)
    };
    userData();
  }, []); // Include data in the dependency array to re-run the effect when it changes

     


  return (
    <div className='mainx'>
      <h3>Profile Data</h3>
      <div className='sec-main'>
        {/* {data123.map((item, index) => (
          <div key={index}>
            <div className='image'>
              {item && <img src={`${process.env.PUBLIC_URL}/Images/${item.Images}`} alt="" height={100} />}
            </div>
            <div className='name'>
              {item.Name}
            </div>
            <div className='email'>
            {item.Email}
            </div>
          </div>
        ))} */}
         <div className='image'>
              {data123 && <img src={`${process.env.PUBLIC_URL}/Images/${data123.Images}`} alt="" height={100} />} 
            </div>

           <div className='name'>
              {data123.Name}
            </div>
            <div className='email'>
            {data123.Email}
            </div>
        <div className='up-btn'>
      <Link to={'/updateProfile'}> <button>Update</button> </Link> 
        </div>
      </div>
    </div>
  )
}

export default Displayy

//  {data && <img src={./Images/${data.Images}} alt="" height={50} width={50}/>}