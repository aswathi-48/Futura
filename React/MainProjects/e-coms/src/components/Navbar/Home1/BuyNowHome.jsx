import React, { useState } from 'react'
import './BuyNowHome.css'
import { Link, useParams } from 'react-router-dom'
import { getOrder, postUserOrder } from '../../ApiCallll/ApiCall'

const BuyNowHome = () => {
const values= useParams()

var Ids=values.id


console.log("*****************",Ids);

 const [HouseName,setHouseName] = useState("")
 const [HouseNo,setHouseNo] = useState('')
 const [Pincode, setPincode] = useState( '');
 const [Landmark,setLandmark]=useState('')
 const [city,setCity] = useState('')


  //  const dataget =async()=>{
  //   // console.log("datagetss",id);
  //   try{
  //       const handGet = await getOrder()
  //       console.log('handget',handGet);
  //   }catch(err){
  //     console.log(err);
  //   }
  //  }
  
  // const display = async()=>{
  //   try{
  //     const dataPost = await postUserOrder({HouseName,HouseNo,Pincode,Landmark,city})
  //     console.log("sdfgh",dataPost.data);
  //   }catch(err){

  //   }
  // }
  
  return (
    <div className='main_buyContainer'>
      <h3>Enter Your Adderess</h3>
      <div className='main_Head'>
        <div className='main_inputs'>
          <div>
          <input type="text"  placeholder='HouseName/Bulding'  id=""  onChange={(e) => setHouseName(e.target.value)}/>
        </div>
        <div>
          <input type="text"  placeholder='HouseNo/BuldingNo' id="" onChange={(e) => setHouseNo(e.target.value)}/>
        </div>
        <div>
          <input type="text"  placeholder='PinCode' id="" onChange={(e) => setPincode(e.target.value)} />
        </div>
        <div>
          <input type="text"  placeholder='LandMark' id="" onChange={(e) => setLandmark(e.target.value)}/>
        </div>
        <div>
          <input type="text"  placeholder='City' id="" onChange={(e) => setCity(e.target.value)} />
        </div>
        <div>

          <Link to={`/buyhomedetails/${Ids}`}> <button >Continue</button></Link> 
        </div>
        </div>
      </div>
    </div> 
  )
}

export default BuyNowHome