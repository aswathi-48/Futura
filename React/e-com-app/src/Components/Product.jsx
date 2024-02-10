import React from 'react'
import ProductDetails from './ProductDetails'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoIosCloseCircleOutline } from "react-icons/io";
import './Product.css'
import Home from './Home';

const Product = ({ product, setProduct, detail, view, close, setClose ,addtocart,}) => {


  const filtterproduct = (product) => {
    const update = ProductDetails.filter((x) => {
      return x.Cat === product;
    })      
    setProduct(update);
  }    
  const Allproducts = () => {
    setProduct(ProductDetails)
  }
  
  return (
    <>

      { close ?
          <div className='product_details'>
            <div className='p_container'>
              <button onClick={() => setClose(false)} className='close-btn'> <IoIosCloseCircleOutline /></button>
              
              {
                detail.map((curElm) => {
                  return (

                    <div className='productbox'>
                      <div className='img_boxx'>
                        <img src={curElm.Img} alt={curElm.Titie} />
                      </div>
                      <div className='p_detail'>
                        <h4>{curElm.Cat}</h4>
                        <h2>{curElm.Titie}</h2>
                        <p>A Screen Everyone Will Love:Whether your family is streaming or video chatting with friends tablet A8...</p>
                        <h3>{curElm.Price}</h3>
                        <button className='cart-btn' onClick={()=> addtocart (curElm)} >Add To Cart</button>
                        <button className='buy-btn' >Buy Now</button>
                      </div>
                    </div>
                  )
                })
              }
              <div className='productbox'></div>
            </div>
          </div> : null
      }

      <div className='products'>
        <h2># Products</h2>
        <p>Home . Products</p>
        <div className='containerss'>
          <div className='filter'>
            <div className='categories'>
              <h3>Categories</h3>
              <ul>
                <li onClick={() => Allproducts()}>All Products</li>
                <li onClick={() => filtterproduct("Mobile")}>Mobile</li>
                <li onClick={() => filtterproduct("Smart Watch")}>Smart Watch</li>
                <li onClick={() => filtterproduct("Headphone")}>Headphone</li>
                <li onClick={() => filtterproduct("Camera")}>Camera</li>
                <li onClick={() => filtterproduct("Speaker")}>Speaker</li>
              </ul>
            </div>
          </div>
          <div className='productbox'>
            <div className='container2'>
              {
                product.map((curElm) => {
                  return (
                    <>
                      <div className='boxs1' key={curElm.id}>
                        <div className='img_boxs1'>
                          <img src={curElm.Img} alt="" />
                          <div className='icons1'>
                            <li onClick={()=> addtocart (curElm)}> <AiOutlineShoppingCart /></li>
                            <li onClick={() => view (curElm)}> <BsEye /></li>
                            <li> <AiOutlineHeart /></li>
                          </div>
                        </div>
                        <div className='details1'>
                          <p>{curElm.Cat}</p>
                          <h3>{curElm.Titie}</h3>
                          <h4>${curElm.Price}</h4>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product