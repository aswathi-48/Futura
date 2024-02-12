import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserProfile } from '../../ApiCallll/ApiCall'
import './Profile.css'
import { Link } from 'react-router-dom'

const Profile = () => {
  const [dataa1, setData1] = useState([])

  const dataz = useSelector((state) => state.Userrss.userrData[0])
  console.log("###", dataz);

  if (dataz) {
    var id = dataz && dataz._id
    console.log('iddss', id);
  }


  useEffect(() => {
    const profileData = async () => {
      const dataa = await getUserProfile(id)
      console.log('valuesss',dataa);
      setData1(dataa)
    };
    profileData();
  }, []);

  return (
    <div className='usermain'> 
      <h3>ProfileData</h3>
      <div className='user-secMain'>
      <div className='userimge'>
        {dataa1 && <img src ={`${process.env.PUBLIC_URL}/Images/${dataa1.Images}`} alt="" height={100} />}
      </div>
      <div className='username'>
        {dataa1.Name}
      </div>
      <div className='useremail'>
        {dataa1.Email}
      </div>
      <div>
        <Link to={'/update'}> <button className='updateBtn'>Update</button> </Link>
      </div>
    </div>
    </div>
  )
}

export default Profile