import React from 'react'
import PropTypes from 'prop-types'
import Model from '../../Model'
import { IoClose } from "react-icons/io5";
import { postCart, postOrder } from '../../ApiCallll/ApiCall'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BurgerContainerModel = (props) => {
  const dataz =  useSelector((state) => state.Userrss.userrData[0])
  const loginId = dataz._id

    const data = {
        quantity:1,
          itemName:props.title,
          itemPrice:props.price,
          itemImage:props.image,
          orderId:loginId
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
    <button className='buynow'> <Link to={`/homeBuyNow/${props.title}`} className='link-buy'><button onClick={orerHandler}>BuyNow</button></Link></button>
    </div>

    </div>
   
    {/* <button onClick={props.hideHandler}>close</button> */}

  </div>
  </div>
  </Model>
  )
}

BurgerContainerModel.propTypes = {}

export default BurgerContainerModel