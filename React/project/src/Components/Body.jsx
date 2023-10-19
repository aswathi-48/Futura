import React from 'react'
import './Body.css'

const Body = ({values}) => {

    
    return (
        <div>

            <div >
                <div className='b-card-container'>
                    {values.map(item => (
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