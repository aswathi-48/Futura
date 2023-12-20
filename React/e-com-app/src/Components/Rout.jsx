import React from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom'
import Home from './Home'
import Product from './Product';
import Cart from './Cart';
import Contact from './Contact';
import About from './About';
import BuyNow from './BuyNow';


const Rout = ({product,setProduct,detail,view, close, setClose,cart,setCart,addtocart}) => {
 

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home  detail={detail} view={view}  close={close} setClose={setClose} addtocart={addtocart}/>}/>
        <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view}  close={close} setClose={setClose} addtocart={addtocart} />}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/buynow' element={<BuyNow/>}/>
      </Routes>
    </div>
  );
}

export default Rout;
