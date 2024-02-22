import React, { useEffect, useState } from 'react'
import { UpdateOrderUder, getuserorder } from '../../ApiCallll/ApiCall';
import { useSelector } from 'react-redux';
import './BuyHomeUpdate.css'

export const BuyHomUpdate = () => {
    const [HouseName,setHouseName] = useState("")
    const [HouseNo,setHouseNo] = useState('')
    const [Pincode, setPincode] = useState( '');
    const [Landmark,setLandmark]=useState('')
    const [city,setCity] = useState('')
    const [phone,setphone] = useState('')
    const [productId,setProductId]=useState()
    const [newData,setNewData]=useState([])

    const dataz = useSelector((state) => state.Userrss.userrData[0])
    console.log(dataz._id);
    const loginId = dataz._id
    useEffect(() => {
      const displayDetails = async () => {
          try {
              const res = await getuserorder(loginId);
              console.log("dataaa", res);
              console.log(res.data[0]);
              // setNewData([res.data[0]])

              if (res) {
                  setHouseName(res.data[0].HouseName);
                  setHouseNo(res.data[0].HouseNo);
                  setPincode(res.data[0].Pincode);
                  setLandmark(res.data[0].Landmark);
                  setCity(res.data[0].city);
                  setphone(res.data[0].phone);
                  setProductId(res.data[0]._id)
              }
          } catch (err) {
              console.log(err);
          }
      };
      displayDetails();
  }, [loginId]);


  const updateData = async () => {
    try {
        console.log("asdfghjk", loginId);
        const dataas = await UpdateOrderUder({ _id:productId, HouseName, HouseNo, Pincode, Landmark, city, phone });
        console.log('updatvalueess', dataas);
        console.log("**********", HouseName);
    } catch (err) {
        console.log(err);
    }
}

// const HouseName = newData.map((li)=>li.HouseName)
// console.log(HouseName);
  return (
    <div>
        <div className='mainz'>
            <h2> update your Address: </h2>
            <div className='inputss'>
          <div className='house_inpts'> 
          <input type="text" value={HouseName} placeholder='HouseName/Bulding'  id=""  onChange={(e) => setHouseName(e.target.value)} className='hs_inpts'/>
        </div>
        <div className='house_inpts'>
          <input type="text" value={HouseNo}  placeholder='HouseNo/BuldingNo' id="" onChange={(e) => setHouseNo(e.target.value)} className='hs_inpts'/>
        </div>
        <div className='house_inpts'>
          <input type="text" value={Pincode} placeholder='PinCode' id="" onChange={(e) => setPincode(e.target.value)} className='hs_inpts'/>
        </div>
        <div className='house_inpts'>
          <input type="text" value={Landmark} placeholder='LandMark' id="" onChange={(e) => setLandmark(e.target.value)} className='hs_inpts'/>
        </div>
        <div className='house_inpts'>
          <input type="text" value={city} placeholder='City' id="" onChange={(e) => setCity(e.target.value)} className='hs_inpts' />
        </div>
        <div className='house_inpts'>
          <input type="phone" value={phone} placeholder='phone' id="" onChange={(e) => setphone(e.target.value)} className='hs_inpts'/>
        </div>
        <div className='btn_up'>
<button onClick={updateData}>update</button>        </div>
        </div>
          
        </div>
    </div>
  )
}
