import React, { useState } from 'react'
import { BsEye } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { postCart } from '../../ApiCallll/ApiCall';
import './PizzaContainer.css'
import PizzaContainerModel from './PizzaContainerModel';
import { useSelector } from 'react-redux';

const PizzaContainer = (props) => {
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


            //view

            const showModelHandler=()=>{
              setViewState(true)
             }
        
             const hideModalHandler=()=>{
              console.log("haii");
              setViewState(false)
             }

  return (
    <div className='contains'>
        <div className='pizza__top'> 
       
       
        <div className='pizza__image'>
        <img src={ `${process.env.PUBLIC_URL}/Images/${props.image}`} alt={props.title} style={{ maxWidth: '200px' }} />
        </div>
        <div className='pizza__icons'> 
        <li> <AiOutlineShoppingCart onClick={cartHandler}  className='icns'/></li>
           <li > <BsEye className='icns' onClick={showModelHandler} /></li>
        </div>
        </div>

        <div className='pizza__bottom'>
        <div className='pizza__details'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>MRP: {props.price}</p>
        </div>
        </div>
       
        
        {viewState && 
        <PizzaContainerModel image={props.image} title={props.title} price={props.price} description={props.description} hideHandler={hideModalHandler} /> }


        {/* <div key={data.id} className="pizza-item">
             <div className='icon-list'>
              
              </div>
              </div> */}
              
           
          
    </div>
  )
}

export default PizzaContainer