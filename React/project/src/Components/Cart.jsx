
import React from 'react'
import './Cart.css'
// import imgz from './Assets/body-image.jpg'

const Cart = () => {
    return (
        <div className='first'>
            <div className='all'>
                <div className='cart-main'>
                    <h3>Shopping Cart</h3>
                    <div className='cart-content'>
                        <div className='cart-count'>
                            <h1>1</h1>
                        </div>
                        <div className='cart-img'>
                            <img className='img-kart' src='https://m.media-amazon.com/images/I/71GLMJ7TQiL._SX679_.jpg' alt="" />
                        </div>
                        <div className='cart-details'>
                            <h4>Apple iPhone 13 (128GB) </h4>
                            <h6>-27% ₹50,999</h6>
                            <h6>M.R.P.: ₹69,900</h6>
                            <div className='item-btn'>
                                <button>Qty:<span className='qty-num'>2</span></button>  
                            </div>
                            <div className='btn-contents'>
                                <span className='del-btn'>
                                    <a href="">delete</a>
                                </span>
                                <span className='save-btn'>
                                    <a href="">remindlater</a>
                                </span>
                                <span>
                                    <a href="share">share</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart


