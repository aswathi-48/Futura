import React, { useState } from 'react'
import { BsEye } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './DessertContainer.css'
import { postCart } from '../../ApiCallll/ApiCall';
import BurgerContainerModel from '../burger/BurgerContainerModel';
import { useSelector } from 'react-redux';

const DessertContainer = (props) => {

  const [viewState,setViewState]=useState(false)

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

            const showModelHandler=()=>{
              setViewState(true)
             }
        
             const hideModalHandler=()=>{
              console.log("haii");
              setViewState(false)
             }

  return (
    <div className='containr'>
        <div className='dessert__top'>
            <div className='dessert__image'>
            <img src={ `${process.env.PUBLIC_URL}/Images/${props.image}`} alt={props.title} style={{ maxWidth: '200px' }} />
            </div>
            <div className='dessert__icons'>
            <li> <AiOutlineShoppingCart onClick={cartHandler}  className='icns'/></li>
           <li > <BsEye className='icns' onClick={showModelHandler} /></li>
            </div>
        </div>
        <div className='dessert__bottom'>
            <div className='dessert__details'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>MRP: {props.price}</p>
            </div>
        </div>  
        {viewState &&
        <BurgerContainerModel  image={props.image} title={props.title} price={props.price} description={props.description} hideHandler={hideModalHandler}/> } 
    </div>
  )
}

export default DessertContainer