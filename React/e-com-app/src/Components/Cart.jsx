import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Cart.css'


const Cart = ({cart,setCart}) => {

    //increase quantity

    const incqty =(product) =>
    {
        const exsit = cart.find((x)=>
        {
            return x.id === product.id
        })
        setCart(cart.map((curElm)=>
        {
            return curElm.id === product.id ? {...exsit, qty: exsit.qty +1} : curElm
        }
        ))
    }
    //Decrease quantity
    const decqty =(product) =>
    {
        const exsit = cart.find((x)=>
        {
            return x.id === product.id
        })
        setCart(cart.map((curElm)=>
        {
            return curElm.id === product.id ? {...exsit, qty: exsit.qty - 1} : curElm
        }
        ))
    }
    //remove cart product

    const removeproduct =(product) =>
    {
        const exsit = cart.find((x)=>
        {
            return x.id === product.id
        })
        if(exsit.qty > 0)
        {
            setCart(cart.filter((x)=>
            {
                return x.id !== product.id
            }))
        }
    }
    //Total price

    const Totalprice =cart.reduce((price,item)=> price + item.qty * item.Price, 0) 
  return (
    <>
     <div className='c-container'>
        {cart.length === 0 &&
        <div className='emptycart'>
        <h2 className='empty'> Cart is Empty</h2>
        <Link to='/product' className='emptyCartbtn'>Shop Now</Link>
        </div>
        }
        <div className='c-content'>
            {
                cart.map((curElm)=>
                {
                    return(
                   <div className='cart-item' key={curElm.id}>
                    <div className='cart-img-box'>
                        <img src={curElm.Img} alt={curElm.Title} />
                    </div>
                    <div className='c-detail'>
                        <div className='info'>
                        <h4>{curElm.Cat}</h4>
                        <h3>{curElm.Titie}</h3>
                        <p>Price: ${curElm.Price}</p>
                        <div className='qty'>
                            <button className='incqty' onClick={()=>incqty(curElm)}>+</button>
                            <input type="text" value={curElm.qty} />
                            <button className='decqty' onClick={()=>decqty(curElm)}>-</button>

                        </div>
                        <h4 className='subtotal'>sub total: ${curElm.Price * curElm.qty}</h4>
                        </div>
                        <div className='close'>
                        <button onClick={()=> removeproduct(curElm)}><AiOutlineClose /></button>
                        </div>
                        
                    </div>
                    <div className='btnn'>
                    
                    <Link to='../Components/BuyNow.jsx'> <button className='buy-btn' >Buy Now</button></Link>
                    
                    </div>
                   
                   </div>
                     
                    )
                })
            }
        </div>
        {
            cart.length > 0 &&
            <>
              <h2 className='Totalprice'>Total $ {Totalprice}</h2>
              <button className='checkout'>Checkout</button>

            </>
        }
    </div> 
    </>

  )
}

export default Cart


// import React from 'react'

// const Cart = () => {
//   return (
//     <div>Cart</div>
//   )
// }

// export default Cart