import React from 'react'
import './Body.css'

const Body = ({valuess,setActivenav,setProductDetails}) => {
    console.log("valuess",valuess);
    
   
    const handleCardClick=(item)=>{
        setProductDetails(item)
        setActivenav(2);
    }
    
    return (
        <div>

            <div >
                <div className='b-card-container'>
                    {valuess.map(item => (
                        <div key={item.id} className="card-items" onClick={()=> handleCardClick(item)}>
                            <img src={item.thumbnail} alt={item.name} className='card-image' />
                            <div className="card-item-details">
                                <span className='card-item-title'>{item.title}</span>
                                <span className='card-item-description'>{item.description}</span>
                                <span>₹{item.price} <span className='cart-item-mrp'>MRP <span className='cart-item-value'>₹{item.mrp}</span></span></span>
                                
                            </div>
                        </div>
                    ))}

                </div>
            </div>


        </div>
    )
}

export default Body