import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { UpdateQuantity, deleteCartItems } from '../../ApiCallll/ApiCall';


const CartItem = (props) => {
    const [quantity,setQuantity]=useState(props.quantity)
console.log('1111111111',quantity);
console.log('22222',props.quantity);




    const DeleteCart = async(id) => {
        console.log('delete using id',id);
        try{
         deleteCartItems(id)
        }catch(err){
          console.log(err);
        }
       }

       

       const addOnHandler=async()=>{
const quantityState=quantity+1
console.log(quantityState);
 const data = {id: props.id,  quantityState}
    const res= await UpdateQuantity(data)
    console.log(res.data);
    setQuantity(res.data.itemQuantity)
       }

       const decOnHandler=async()=>{
        const quantityState=quantity-1
        console.log(quantityState);
         const data = {id: props.id,  quantityState}
            const res= await UpdateQuantity(data)
            console.log(res.data);
            setQuantity(res.data.itemQuantity)
               }

               console.log(props.itemQuantity);
               console.log(props.itemPrice);

  return (
    <div key={props._id} className='cart__items'>
              <div className='cart__image'>
              {props && <img src={`/Images/${props.itemImage}`} width={50} />}
              </div>
              <div className='cart__details'>
                <div className='cart__info'>
              <h3>  {props.itemName}</h3>
               <p>  ${props.itemPrice}</p>
             {/* <p>{props.des} </p> */}
               <div className='item__qnty'>
                <button className='incqnty' onClick={addOnHandler} >+</button>
                <h3>{quantity}</h3>
                {/* <input type="text" value={props.itemQuantity}  /> */}
                <button className='decqnty' onClick={decOnHandler} >-</button>
                </div>
                <h4 className='subtotal'>Sub Total:{props.itemQuantity * props.itemPrice}</h4>
                </div>
               
                <div className='cart__remove'>
                  <button className='close__button' onClick={()=> DeleteCart(props.id)}><AiOutlineClose /></button>
                </div>
                </div>
                <button className='buy__btn'>buynow</button>
     </div>
  )
}

export default CartItem