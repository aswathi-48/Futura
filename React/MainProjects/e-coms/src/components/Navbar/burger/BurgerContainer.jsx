import React, { useState } from 'react'
import { postCart } from '../../ApiCallll/ApiCall'
import { BsEye } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './BurgerContainer.css'
import BurgerContainerModel from './BurgerContainerModel';

const BurgerContainer = (props) => {
  const [viewState,setViewState]=useState(false)

    const data = {
        quantity:1,
          itemName:props.title,
          itemPrice:props.price,
          itemImage:props.image
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


  return (
    <div className='containss'>
        <div className='burger__top'>
            <div className='burger__image'>
            <img src={ `${process.env.PUBLIC_URL}/Images/${props.image}`} alt={props.title} style={{ maxWidth: '200px' }} />
            </div>
            <div className='burger__icons'>
            <li> <AiOutlineShoppingCart onClick={cartHandler} className='icns1'/></li>
              <li> <BsEye className='icns1'  onClick={showModelHandler}  /></li>
            </div>
        </div>
        <div className='burger__bottom'>
            <div className='burger__details'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>MRP: {props.price}</p>
            </div>

        </div>
        {viewState &&
        <BurgerContainerModel image={props.image} title={props.title} price={props.price} description={props.description} hideHandler={hideModalHandler}/>}
    </div>
  )
}

export default BurgerContainer