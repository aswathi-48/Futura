import React, { useEffect, useState } from 'react';
import { apiValue } from '../../Api/ApiFood';
import { BsEye } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './VegItem.css'
import { ItemView } from '../../ApiCallll/ApiCall';
import DessetView from './DessetView';
import DessertContainer from './DessertContainer';

const VegItem = () => {
  // Filter only veg items
  // const vegItems = apiValue.filter(item => item.category === 'vegItem');
// const {itemDetails,setItemDetails}= useEffect(null)
// const [activeNav, setActiveNav] = useState(0)

   const [items,setItems] =useState([])
  const dessert = items.filter((item) => item.type === 'dessert');


  useEffect(()=> {
    const viewItemss = async(id) =>{
      console.log('dataaa',id);
      try{
        const datas =await ItemView();
            setItems(datas.data)
            console.log("dataaa",datas);
      }catch(err){
          console.log(err);
      }
    }
    viewItemss()
  })

  return (
    <div className='dessert-container'>
      <h1> Delight Your Senses with Irresistible Desserts</h1>
      <div className='dessert-list'>
        {dessert.map(data => (
<DessertContainer  title={data.title} description={data.description} price={data.price} image={data.Images} quantity={data.quantity} />

          // <div key={data.id} className='dessert-item'>
          //   <div className='icn-list'>
          //   <li> <AiOutlineShoppingCart  className='icn1'/></li>
          //     <li> <BsEye className='icn1' /></li>
          //   </div>
          //   {/* <img src={data."../adminPart/admin/public/Images"} alt={data.title} style={{ maxWidth: '200px' }} /> */}
          // <div className='dessert-image'>  {data && <img src={`${process.env.PUBLIC_URL}/Images/${data.Images}`} width={50} />}</div>
          //   <h3>{data.title}</h3>
          //   <p>{data.description}</p>
          //   <p>MRP: {data.price}</p>
          // </div>
        ))}
      </div>
      <div>
        <div>
          {/* <DessetView value={values} setItemDetails={setItemDetails} setActivenav={setActiveNav} /> */}
        </div>
      </div>
    </div>
  );
};

export default VegItem;
