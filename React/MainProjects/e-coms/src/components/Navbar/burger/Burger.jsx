import React, { useEffect, useState } from 'react';
import { apiValue } from '../../Api/ApiFood';
import './Burger.css'
import { BsEye } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ItemView } from '../../ApiCallll/ApiCall';
import BurgerContainer from './BurgerContainer';

const Burger = () => {
  // Filter only burger items
  const [items,setItems]=useState([])
  const burgerItems = items.filter(item => item.category === 'burger');

  useEffect(()=> {
    const viewItemss = async(id) =>{
      console.log('dataaa',id);
      try{
        const datas =await ItemView();
            setItems(datas.data)
            console.log("dataaa",datas);
      }catch(err){

      }
    }
    viewItemss()
  })

  return (
    <div className='burger-container'>
      <h1>Explore Our Delectable Burger Selection</h1>
      
      <div className='burger-list'>
        {burgerItems.map(data => (
          <BurgerContainer title={data.title} description={data.description} price={data.price} image={data.Images} quantity={data.quantity}/>
          // <div className='burger-item' key={data.id}>
          //    <div className='icons-list'>
          //      <li> <AiOutlineShoppingCart  className='icns1'/></li>
          //     <li> <BsEye className='icns1' /></li>
          //     </div>
          //   {/* <img src={item.img} alt={item.title} style={{ maxWidth: '200px' }} /> */}
          //   {data && <img src={`${process.env.PUBLIC_URL}/Images/${data.Images}`} width={50} />}
          //   <h3>{data.title}</h3>
          //   <p>{data.description}</p>
          //   <p>MRP: {data.price}</p>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Burger;
