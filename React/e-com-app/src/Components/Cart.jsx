import React from 'react'
import { AiOutlineClose } from "react-icons/ai";


const Cart = ({cart,setCart}) => {
  return (
    <>
    <div className='c-container'>
        {Cart.length === 0 &&
        <div className='emptycart'>
        <h2 className='empty'> Cart is Empty</h2>
        </div>
        }
        <div className='c-content'>
            {
                cart.map((curElm)=>{
                    return(
                   <div className='cart-item'>
                    <div className='cart-img-box'>
                        <img src={curElm.img} alt="" />
                    </div>
                    <div className='c-detail'>
                        <h4>{curElm.Cat}</h4>
                        <h3>{curElm.Title}</h3>
                        <p>{curElm.Price}</p>
                        <button><AiOutlineClose /></button>
                    </div>
                   </div>
                     
                    )
                })
            }
        </div>
    </div>
    </>

  )
}

export default Cart