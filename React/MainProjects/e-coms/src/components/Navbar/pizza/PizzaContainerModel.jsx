import React from 'react'
import { IoClose } from "react-icons/io5";

import './PizzaContainerModel.css'
import { postCart } from '../../ApiCallll/ApiCall';
import Model from '../../Model';
const PizzaContainerModel = (props) => {
    const data = {
        quantity:1,
          itemName:props.title,
          itemPrice:props.price,
          itemImage:props.image
      }
      const cartHandler=async()=>{
    
    return await postCart(data)
      }

  return (
    <Model hideHandler={props.hideHandler}>
         <div className='containssr'>
      
      <div className='main'>
     <div className='item__tops'>
     
     <div className='item__images'>
     <img src={ `${process.env.PUBLIC_URL}/Images/${props.image}`} alt={props.title} style={{ maxWidth: '200px' }} />
     </div>
     {/* <div className='item__iconss'>
      <li> <AiOutlineShoppingCart   className='icn' /></li>
     <li> <BsEye className='icn' onClick={()=>props.modelHandler} /></li>
     </div> */}
     
     </div>
    
    <div className='item__bottoms'>
    <div className='close__icon'>
    <IoClose onClick={props.hideHandler} className='close'/>
    </div>
      <div className='item_detailss'> 
      <h3>{props.title}</h3>
     <p>{props.description}</p>
     <p>MRP: {props.price}</p>
     <button className='addtocart' onClick={cartHandler}>AddToCart</button>
     <button className='buynow'>BuyNow</button>
     </div>
 
     </div>
    
     {/* <button onClick={props.hideHandler}>close</button> */}
 
   </div>
    </div>
    </Model>
  )
}

export default PizzaContainerModel