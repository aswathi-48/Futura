import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { postCart } from '../../ApiCallll/ApiCall';
import './ItemContainer.css'
import Model from '../../Model';
import ItemContainerModal from './ItemContainerModal';
// import './Home1.css'

const ItemContainer = (props) => {
  const [viewState,setViewState]=useState(false)

  console.log(props.quantity);
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

    
    const showModelHandler=()=>{
      setViewState(true)
     }

     const hideModalHandler=()=>{
      console.log("haii");
      setViewState(false)
     }
    // const Model = <Model/>
  return (
  //  <Model>
     <div className='contain'>
      
     
           <div className='item__top'>
           
           <div className='item__image'>
           <img src={ `${process.env.PUBLIC_URL}/Images/${props.image}`} alt={props.title} style={{ maxWidth: '200px' }} />
           </div>
           <div className='item__icons'>
            <li> <AiOutlineShoppingCart onClick={cartHandler}  className='icn' /></li>
           <li> <BsEye className='icn' onClick={showModelHandler} /></li>
           </div>
           
           </div>
          
          <div className='item__bottom'>
            <div className='item_details'> 
            <h3>{props.title}</h3>
           <p>{props.description}</p>
           <p>MRP: {props.price}</p>
           </div>

           </div>
           {viewState &&
           <ItemContainerModal image={props.image} des={props.des} title={props.title} price={props.price} description={props.description} hideHandler={hideModalHandler} />}
         </div>
        //  </Model>
 
  )
}

export default ItemContainer