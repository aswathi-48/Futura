import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeData } from '../Redux/Userredux'
import NavbarProfile from '../Pages/NavbarProfile'
import './Homeone.css'
const Homeone = () => {
  // const data=useSelector((state)=>state.users.userInfo)
  // console.log("*******",data);
    const dispatch=useDispatch()

    function LogoutData(){
        dispatch(removeData())
    }
  return (
    <div>
   <NavbarProfile/>
      {/* <h1>Your Details....</h1> */}

        <div className='logingout-btn'>
        <button onClick={LogoutData}>LogOut</button>
        </div>
     </div>











    // <div>
    //     <h1>Your Details....</h1>

    //     {
    //     data.map((datas)=>{
    //         return(
    //             <div className='valuess'>
    //             <h2>{datas._id}</h2>
    //             <h2>{datas.FirstName}</h2>
    //             {/* <h2>{datas.SecondName}</h2> */}
    //             <h2>{datas.Email}</h2>
    //             <h2>{datas.Age}</h2>

    //             </div>

    //         )
    //     })
    //   }

    //     <button onClick={LogoutData}>LogOut</button>
    // </div>
  )
}

export default Homeone