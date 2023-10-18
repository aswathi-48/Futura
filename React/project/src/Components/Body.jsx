import React, { useEffect, useState } from 'react'
import { apiData } from './Api/MyApi';
import './Body.css'

const Body = () => {

    const [state, setState] = useState([]);
   const [filterdState,setFilteredState]=useState([])
   const [activeFilter,setActiveFilter]=useState(All)
    useEffect(() => {
        async function api() {
            try {
                setState(apiData);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        api()
    }, [])
    return (
        <div>
            <div >
                <div className='b-card-container'>
                    {state.map(item => (
                        <div key={item.id} className="card-items">
                            <img src={item.thumbnail} alt={item.name} className='card-image' />
                            <div className="card-item-details">
                                <span className='card-item-title'>{item.title}</span>
                                <span className='card-item-description'>{item.description}</span>
                                <span>₹{item.price}</span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>


        </div>
    )
}

export default Body