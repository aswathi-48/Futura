import React from 'react'
import Model from '../../Model'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import './ItemContainerModel.css'
import { IoClose } from "react-icons/io5";
import { postCart, postOrder } from '../../ApiCallll/ApiCall';
import { Link } from 'react-router-dom';

const  ItemContainerModal = (props) => {

  console.log(props,'**************************************************');

  const data = {
    quantity:1,
      itemName:props.title,
      itemPrice:props.price,
      itemImage:props.image,
      itemDes:props.des
  }
  const cartHandler=async()=>{

return await postCart(data)
  }



  const value =  {
    title:props.title,
    price:props.price,
    Images:props.image
  }

  const orerHandler = async() => {
    return await postOrder(value)
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
    <button className='buynow' onClick={orerHandler}> <Link to={`/homeBuyNow/${props.title}`} className='link-buy'>BuyNow</Link></button>
    </div>

    </div>
   
    {/* <button onClick={props.hideHandler}>close</button> */}

  </div>
  </div>
  </Model>
  )
}

export default ItemContainerModal