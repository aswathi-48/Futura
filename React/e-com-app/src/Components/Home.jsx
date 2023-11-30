import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { HiOutlineReceiptPercent } from 'react-icons/hi2';
import { BsCurrencyDollar } from 'react-icons/bs';
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { IoIosCloseCircleOutline } from "react-icons/io";
import './Home.css'
import mob from './Assets/mob.jpg.jpeg'
import cam from './Assets/cam.jpg'
import headph from './Assets/head.jpg'
import watch from './Assets/watch.jpg'
import speaker from './Assets/speaker.jpg'
import HomeProduct from './HomeProduct';
import ipad from './Assets/ipads.png'


const Home = ({detail, view, close, setClose,addtocart}) => {
  // const [HomeProducts,setHomeProducts]=useState(HomeProduct)
  return (
    <div>

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
                        <button className='cart-btn'>Add To Cart</button>
                      </div>
                    </div>
                  )
                })
              }
              <div className='productbox'></div>
            </div>
          </div> : null
      }

      <div className='top_banner'>
        <div className='container'>
          <div className='detail'>
            <h2>The Best Note Book Collection 2023</h2>
            <Link to='/Product' className='link'>Shop Now <BsArrowRight /></Link>
          </div>
          <div className='img_box'>
            {/* <img src="https://png.pngtree.com/thumb_back/fh260/background/20230621/pngtree-mobile-shopping-cart-in-a-3d-online-store-concept-image_3651903.jpg" alt="" /> */}
            <img className='first_img' src= {ipad} alt="" />
          </div>
        </div>
      </div>
      <div className='product_type'>
        <div className='containerr'>
          <div className='box'>
            <div className='img_box'>
              <img src={mob} alt="" />
            </div>
            <div className='details'>
              <p>20 Products</p>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src={cam} alt="" />
            </div>
            <div className='details'>
              <p>20 Products</p>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src={headph} alt="" />
            </div>
            <div className='details'>
              <p>18 Products</p>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src={speaker} alt="" />
            </div>
            <div className='details'>
              <p>21 Products</p>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src={watch} alt="" />
            </div>
            <div className='details'>
              <p>12 Products</p>
            </div>
          </div>
        </div>
      </div>
      <div className='about'>
        <div className='containers'>
          <div className='boxs'>
            <div className='icon'>
              <FiTruck />
            </div>
            <div className='detail'>
              <h3>Free Shipping</h3>
              <p>Order above $1000</p>
            </div>
          </div>
          <div className='boxs'>
            <div className='icon'>
              <BsCurrencyDollar />
            </div>
            <div className='detail'>
              <h3>Return&Refund</h3>
              <p>Money back Gaurenty</p>
            </div>
          </div>
          <div className='boxs'>
            <div className='icon'>
              <HiOutlineReceiptPercent />
            </div>
            <div className='detail'>
              <h3>Member Discount</h3>
              <p>On every Order</p>
            </div>
          </div>
          <div className='boxs'>
            <div className='icon'>
              <BiHeadphone />
            </div>
            <div className='detail'>
              <h3>Customer Support</h3>
              <p>Every Time Call Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className='product'>
        <h2>Top Products</h2>
        <div className='containerrs'>
          {
            HomeProduct.map((curElm) => {
              return (
                <div className='box3' key={curElm.id}>
                  <div className='img_box3'>
                    <img src={curElm.Img} alt="" />
                    <div className='icon3'>
                     <li onClick={()=> addtocart (curElm)}> <AiOutlineShoppingCart className='one'/></li>
                    <li onClick={() => view (curElm)}>  <BsEye className='two'/></li>
                     <li> <AiOutlineHeart className='three' /></li>
                    </div>
                  </div>
                  <div className='detail3'>
                    <p>{curElm.Cat}</p>
                    <h3>{curElm.Titie}</h3>
                    <h4>${curElm.Price}</h4>
                  </div>
                </div>

              )

            })
          }
          {/* <div className='box3'></div> */}
        </div>
      </div>
      <div className='banner'>
        <div className='container4'>
        <div className='detail4'> 
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Apple ipad 10.2 9th Gen-2023</h3>
            <p>$ 986</p>
            <Link to={'/product'} className='link4'>Shop Now <BsArrowRight className='arrow'/></Link>
          </div>
          <div className='img4_box'>
            {/* <img className='mg' src="https://m.media-amazon.com/images/I/715vnqRA08L._SY450_.jpg" alt="" /> */}
            <img src={ipad} alt="" />
          </div>
        </div>    
      </div>
    </div>
  )
}

export default Home
