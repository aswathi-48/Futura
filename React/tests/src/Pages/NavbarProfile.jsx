import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getProfile, signupdata, updateProfile } from '../Components/Apicall'
import './NavbarProfile.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import useHistory from 'react-router-dom'



const NavbarProfile = () => {

  const [FirstName,setFirstName]=useState('')
  const [SecondName,setSecondName]=useState('')
  const [Age,setAge]=useState('')
  const [Address,setAddress]=useState('')
  const [Email,setEmail]=useState('')
  const[id,setId]=useState("")
  // const imagePath = process.env.PUBLIC_URL + '/public/Images/IMG_20230413_181035_118.jpg';
  // console.log('imgpath',imagePath);
 
  const [data1, setData1] = useState()
  // const imagepath=process.env.PUBLIC_URL + '/Images/IMG_20230528_133533.jpg'
  // const imagepath=process.env.PUBLIC_URL + '/Images/'



 
  const fullData=useSelector((state)=>state.users.userInfo)
  console.log("fuldataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",fullData);
  if(fullData){
     var Id=fullData[0]&&fullData[0]._id
  }

console.log("+++++++",Id);
  const display=async()=>{
   var data=await getProfile(Id)
    console.log("data ?",data.data);
   setData1(data.data)
  
  } 
  console.log("dataaa",data1);


  return (
    <div>
      <div className='nav-main'>
        <div className='nav-search'>
          <input type="text" placeholder='search here' />
          <button>search</button>
      </div>
      <div className='nav-list'>
        <ul>
          <li>Home</li>
      <li onClick={display}>Profile</li>
      {/* <li><Link to='/update' className='u-link'>Update</Link></li> */}
      {/* <li onClick={handleUpdateClick}>Update</li> */}
      
        </ul>

      </div>
      </div>
      <div className='mapping'>
      <h1 className='head'>Your Details....</h1>
          <div className='map-data'>
              <div >
              {data1 && <img src={`./Images/${data1.Images}`} height={100} width={100}></img>}
                <h3>{data1&&data1.FirstName}</h3>
                <h4>{data1&&data1.Email}</h4>
                  


              </div>
          
          </div>
      </div>
  
    </div>
  )
}

export default NavbarProfile







// const display=async()=>{
//   var data=await getProfile(Id)
//    console.log("data ?",data.data);
//   setData1(data.data)
//  } 

// console.log(data1,'jhjghjghj');
