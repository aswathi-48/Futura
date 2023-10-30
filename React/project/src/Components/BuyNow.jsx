import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Main.css'

export const BuyNow = () => {

const navigate=useNavigate();

useEffect(()=>{
    const redirect=()=>{
        setTimeout(() => {
            navigate('/main')
            
        }, 2000);
    };
    redirect()
},[navigate]);

  return (
    <div>
        <div className='main-buy'> 
        <div className='buy-now'>
            <h1>Order Successfully Completely</h1>
        </div>
        </div>
    </div>
  )
}
