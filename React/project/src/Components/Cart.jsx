
import React from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
// import imgz from './Assets/body-image.jpg'
import {removeItem} from '../Redux/heystore'

const Cart = ({}) => {
    const dispatch=useDispatch()

    const cartItems = useSelector((state) => state.myApi.mycartInfo);

    function removecart(ids){
        dispatch(removeItem(ids))
           }
    return (
        <div className='first'>
          <div className='cart-body'>
                    <h2>Shopping Cart</h2>
                    <div className='cart-items-container'>
                        {cartItems.map((item, index) => (
                            <div className='cart-item' key={index}>
                                <div className='cart-item-image'>
                                    <img src={item.thumbnail} alt={item.name} />
                                </div>
                                <div className='cart-item-details'>
                                    <span className='cart-item-title'>{item.title}</span>
                                    <span className='cart-item-description'>{item.description}</span>
                                    <span>Price: ₹{item.price}<span className='mrp-value'> MRP ₹{item.mrp}</span></span>
                                    
                                    <div className='cart-item-utils'>
                                        <button className='cart-item-count'>Qty: {item.quantity}</button>
                                        <div className='cart-item-utils-a'>
                                        <button className='cart-util-button' onClick={()=>removecart(item.id)}>Delete</button>                                            <button className='cart-util-button'>Save for Later</button>
                                            <button className='cart-util-button'>Share</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    )
}

export default Cart


