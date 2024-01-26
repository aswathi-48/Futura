import React from 'react'
import './Dashboard.css'
import { BsBorderStyle } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { BsPerson } from "react-icons/bs";
import { PiBowlFoodThin } from "react-icons/pi";
import { PiStorefrontBold } from "react-icons/pi";
import { MdOutlineAdd } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { CiDollar } from "react-icons/ci";
import { TbLayoutDashboard } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { removeData } from '../../Redux/userredux';

const Dashboard = () => {
    const dispatch=useDispatch()

        const logout =()=>{
            dispatch(removeData())
        }

    return (
        <div className='dashboard' >
            <div className='dashboard-main'>
                <div className='dashboard-cntnts'>
                    <div className='dashboard-title'><h4>Tasteee</h4></div>
                    <div className='dashbord-head'>
                        {/* <p>Dashboard</p> */}
                    </div>


                    <div className='dashboard-link1'>
                        <p><TbLayoutDashboard />
                            <Link to='/' className='dash-link' >Dashboard</Link></p>
                    </div>

                    <div className='dashbord-head'>
                        <p>Quick Menu</p>
                    </div>

                    <div className='dashboard-link'>
                        <p><BsPerson className='icon'/>
                            <Link  to='/user' className='dash-link'>User</Link></p>
                    </div>
                    <div className='dashboard-link'>
                        <p><PiBowlFoodThin className='icon'/>
                            <Link to='/items' className='dash-link'>Items</Link></p>
                    </div>
                    <div className='dashboard-link'>
                        <p><MdOutlineAdd className='add-icon'/>
                            <Link to='/additem' className='dash-link-add'>Add Item</Link></p>
                    </div>
                    <div className='dashboard-link'>
                        <p><CiDollar className='icon'/>
                            <Link className='dash-link'>Orders</Link></p>
                    </div>

                        <div className='logout-btn'>
                        <IoMdLogOut />
                    <button onClick={logout} className=''>logout</button>
                    </div>
                </div>
            </div>



            
        </div>

    )
}

export default Dashboard
