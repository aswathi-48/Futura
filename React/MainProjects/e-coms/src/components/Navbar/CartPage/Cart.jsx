import React, { useEffect, useState } from 'react'
import { GetCart, UpdateQuantity, deleteCartItems } from '../../ApiCallll/ApiCall';
import { AiOutlineClose } from "react-icons/ai";
import './Cart.css'
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
export const Cart = () => {
  
  const [items,setItems] =useState([])
  const [quantity,quantityState]=useState(1)

  const values = useParams()
  const id = useParams()
  var Ids = values.id




  const dataz = useSelector((state) => state.Userrss.userrData[0])
  const loginId = dataz._id

  useEffect(()=>{
    const getCart = async ()=>{
      // console.log('iddd',id);
      try{
          const CartData = await GetCart(loginId);
          console.log(CartData.data);
          setItems(CartData.data)
          console.log(CartData.data.itemQuantity);
          quantityState(CartData.data.itemQuantity)
          console.log('dataaaa',CartData);
      }catch(err){
        console.log(err);
      }
    }
    getCart()
  },[])


   const DeleteCart = async(id) => {
    console.log('delete using id',id);
    try{
     deleteCartItems(id)
    }catch(err){
      console.log(err);
    }
   }

   

   


const TotalPrice = items.reduce((itemPrice,item) => itemPrice + item.itemQuantity * item.itemPrice,0)




  return (
    <div className='cart__container'>
      <h1>CartItems</h1>
      <div className='Cart__top'>
        {items.map(data => (
            // <div key={data._id} className='cart__items'>
            //   <div className='cart__image'>
            //   {data && <img src={`/Images/${data.itemImage}`} width={50} />}
            //   </div>
            //   <div className='cart__details'>
            //     <div className='cart__info'>
            //   <h3>  {data.itemName}</h3>
            //    <p>  {data.itemPrice}</p>
             
            //    <div className='item__qnty'>
            //     <button className='incqnty' onClick={addOnHandler} >+</button>
            //     {/* <p>{data.itemQuantity}</p> */}
            //     <input type="text" value={data.itemQuantity}  />
            //     <button className='decqnty'>-</button>
            //     </div>
            //     <h4 className='subtotal'>Sub Total:{data.itemPrice * data.itemQuantity}</h4>
            //     </div>
            //     <div className='cart__remove'>
            //       <button className='close__button' onClick={()=> DeleteCart(data._id)}><AiOutlineClose /></button>
            //     </div>
            //     </div>
            // </div>
            <CartItem itemImage={data.itemImage} itemName={data.itemName} itemPrice={data.itemPrice}  quantity={data.itemQuantity} id={data._id} itemQuantity={data.itemQuantity}/>
        
        ))}
        </div>
        {
            items.length > 0 &&
            <>
              <h4 className='Totalprice'>TotalAmount: <span>${TotalPrice}</span></h4>
              {/* <button className='checkout'>Checkout</button> */}

            </>
        }

        <Link to={`/buyhomedetails/${loginId}`}><button className='checkout_btn'>Proceed To Checkout</button></Link>
    </div>
);
}


export default Cart;