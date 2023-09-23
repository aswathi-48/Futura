import React from 'react'
import './Personal.css'

function Personal() {
  return (
    <div>
        <div className='main1'>
            
            <button className='btn1'>Jeff Sherman</button><br />
            {/* <p>Your Productivity Guru</p> */}
            {/* <h2>Jeff Sherman <br /><p>Your Productivity Guru</p></h2><br /> */}
            <button className='btn2'>Subscribe</button>
            <button className='btn3'>Contact</button>
            <div className='search'>
            <i class="fa fa-search"></i>
            <input type="text" placeholder='Search' />
            </div>   
        </div>
        <div className='main2'>
        <p>Your Productivity Guru</p>
        </div>
        <div className='main3'>
            <img src="https://static.wixstatic.com/media/0b340f_b3e8595169574d4098fbe2dee7b2fda1~mv2.jpg/v1/fill/w_980,h_799,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_b3e8595169574d4098fbe2dee7b2fda1~mv2.jpg" alt="" />
        </div>
        
    </div>
  )
}

export default Personal