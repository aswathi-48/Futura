import React, { useEffect, useState } from 'react'
import './BuyNowHome.css'
import { Link, useParams } from 'react-router-dom'
import { deleteorderuserData, getOrder, getuserorder, postUserOrder } from '../../ApiCallll/ApiCall'
import { getAdapter } from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdClose } from "react-icons/io";


const BuyNowHome = () => {
  const values = useParams()
  const id = useParams()
  var Ids = values.id



  console.log("********33*********", Ids);

  const [HouseName, setHouseName] = useState("")
  const [HouseNo, setHouseNo] = useState('')
  const [Pincode, setPincode] = useState('');
  const [Landmark, setLandmark] = useState('')
  const [city, setCity] = useState('')
  const [phone, setphone] = useState('')
  const [continueState, setContinueState] = useState(false)
  const [datas, setDatas] = useState([])

  const dataz = useSelector((state) => state.Userrss.userrData[0])
  console.log(dataz._id);
  const loginId = dataz._id
  //  const dataget =async()=>{
  //   // console.log("datagetss",id
  //   try{
  //       const handGet = await getOrder()
  //       console.log('handget',handGet);
  //   }catch(err){
  //     console.log(err);
  //   }
  //  }
  useEffect(() => {
    const showHandler = async () => {
      const res = await getuserorder(loginId)
      console.log(res.data)
      if (res.data.length > 0) {
        setContinueState(false)
        setDatas([res.data[0]])

      } else {
        setContinueState(true)
      }

    }
    showHandler()
  }, [])


  const handleget = async () => {
    // console.log(id);
    try {
      const dataget = await getuserorder(loginId)
      console.log("dcfvgh", dataget.data);

    } catch (err) {
      console.log(err);
    }
  }


  const display = async () => {
    try {
      const dataPost = await postUserOrder({ HouseName, HouseNo, Pincode, Landmark, city, phone, loginId })
      console.log("sdfgh", dataPost.data);
      ;
    } catch (err) {

    }
  }

  // const DeleteValues = async(loginId)=>{
  //   console.log("**",loginId);
  //    try{
  //     deleteorderuserData(loginId)
  //    }catch(err){
  //     console.log(err);
  //    }

  // }


  return (
    <div className='main_buyContainer'>
      <h3> Your Adderess :</h3>
      <div className='main_Head'>
        <div className='main_inputs'>
          {continueState &&
            <div className='inputs'>
              <div className='house_inpts'>
                <input type="text" value={HouseName} placeholder='HouseName/Bulding' id="" onChange={(e) => setHouseName(e.target.value)} className='hs_inpt' />
              </div>
              <div className='house_inpts'>
                <input type="text" value={HouseNo} placeholder='HouseNo/BuldingNo' id="" onChange={(e) => setHouseNo(e.target.value)} className='hn_inpt' />
              </div>
              <div className='house_inpts'>
                <input type="text" value={Pincode} placeholder='PinCode' id="" onChange={(e) => setPincode(e.target.value)} className='pin_inpt' />
              </div>
              <div className='house_inpts'>
                <input type="text" value={Landmark} placeholder='LandMark' id="" onChange={(e) => setLandmark(e.target.value)} className='lan_inpt' />
              </div>
              <div className='house_inpts'>
                <input type="text" value={city} placeholder='City' id="" onChange={(e) => setCity(e.target.value)} className='city_inpt' />
              </div>
              <div className='house_inpts'>
                <input type="phone" value={phone} placeholder='phone' id="" onChange={(e) => setphone(e.target.value)} className='pho_inp' />
              </div>
            </div>
          }
          <div>


            {!continueState && datas.map((li) => (
              <>
                <div className='map_details'>
                  {/* <button className='delbtn' onClick={DeleteValues}><IoMdClose /></button> */}

                  <p className='H_P'>{li && li.HouseName}</p>
                  <p className='H_P'>{li.HouseNo}</p>
                  <p className='H_P'>{li.Pincode}</p>
                  <p className='H_P'>{li.Landmark}</p>
                  <p className='H_P'>{li.city}</p>
                  <p className='H_P'>{li.phone}</p>
                </div>
              </>

            ))}
          </div>
          <div>
            {continueState &&
              <Link to={`/buyhomedetails/${Ids}`}> <button onClick={() => display(id)} className='cti_btn'>Continue</button></Link>}
            <Link to={`/buyhomeupdate/${Ids}`}> <button className='chge_btn' onClick={() => handleget(id)}>change</button></Link>

            {!continueState &&
              <Link to={`/buyhomedetails/${Ids}`} className=''> <button className='ctn_btn' >Continue</button></Link>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyNowHome