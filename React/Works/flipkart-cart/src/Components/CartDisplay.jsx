import React from 'react'
import { useSelector } from 'react-redux';

const CartDisplay = () => {
    const data=useSelector((state)=>state.items.cartInfo) ;
    console.log('redux-data',data);

  return (
    <div>
        <div className="card-container">
                {data.map((items) => (
                    <div className="card-card" key={items.id}>
                        <span className="card-text">{items.id}</span>
                        <img
                            src={items.thumbnailUrl}
                            alt="grocerygettyf1122"
                            className="card-grocerygettyf1"
                        />
                        <span className="card-text1">{items.title}</span>
                        
                    </div>
                ))}
            </div>
    </div>
  )
}

export default CartDisplay