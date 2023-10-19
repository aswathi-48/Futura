import React, { useEffect } from 'react'
import './Loading.css'
import { useNavigate } from 'react-router-dom'

const Loading = () => {
    const navigate=useNavigate();

    useEffect(()=>{
        const redirect=()=>{
            setTimeout(() => {
                navigate('/main')
            }, 2300);
        };
        redirect();
    },[navigate]);
    return (
        <div>
            <div className='loading-main'>
                <h2 data-text="HeyStore...">heyStore...</h2>
            </div>
        </div>
    )
}

export default Loading