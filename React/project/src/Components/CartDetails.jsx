import React from 'react'
import './CartDetails.css'
import { useDispatch } from 'react-redux'
import { mycartPage } from '../Redux/heystore'
import { Link } from 'react-router-dom'

const CartDetails = ({ productDetails }) => {
  const dispatch=useDispatch()

  const handleAddToCart=()=>{
    dispatch (mycartPage(productDetails))
  }

  return (
    <div>
        <div className='deatils-main'>
          <div className='details-card'>
            <div className='details-card-image'>
              <img src={productDetails.thumbnail} alt={productDetails.name} />
            </div>
            <div className='details-card-content'>
              <h2>{productDetails.title}</h2>
              <h2>{productDetails.description}</h2>
              <span>Price: {productDetails.price} MRP {productDetails.mrp}</span>
              <div className='dcc-bttn'>
                <button onClick={handleAddToCart}>Add to cart</button>
                <Link to='/buy'>
                  <button>Buy Now</button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CartDetails
