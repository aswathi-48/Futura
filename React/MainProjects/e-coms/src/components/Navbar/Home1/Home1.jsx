import React, { useEffect, useState } from 'react';
import { apiValue } from '../../Api/ApiFood';
import './Home1.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import img from '../Home1/img/food-4142.jpg';
import slide from '../Home1/img/slidess.png';
import { BsEye } from 'react-icons/bs';
import grilledbeef from "../../../public/Assets/burger/grilled-beef.jpg"
import ItemContainer from './ItemContainer';
import { ItemView } from '../../ApiCallll/ApiCall';
// import imgss from './img/food-4142.jpg'




const Home1 = (props) => {


  const[item,setItem]=useState([])
useEffect(()=>{
const showHandler=async()=>{
  const res= await ItemView()
  console.log(res.data);
  setItem(res.data)

}
showHandler()
},[])

console.log(props.state);
//filter data using price


const [filteredItems, setFilteredItems] = useState([]);
const [priceRange, setPriceRange] = useState('');

const filterItemsByPrice = (minPrice, maxPrice) => {
  const filtered = item.filter(item => item.price >= minPrice && item.price < maxPrice);
  setFilteredItems(filtered);
  setPriceRange(`$${minPrice} - $${ maxPrice - 1}`);
};

const resetFilter = () => {
  setFilteredItems([]);
  setPriceRange('');
};

// // Filter items based on search query
// const filteredItemss = item.filter(item =>
//   item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())
// );


  console.log(item);
  const image= apiValue.map((li)=>li.img)
  console.log("image",image);
  
  return (
    <div className='main-container'>
      <div>
        {/* <img src={grilledbeef} alt="" /> */}
        {/* <img src={image} alt="" /> */}
        <div className='imge'>
          <img src={img} alt='' />
          <div className='image-text'>
            <img src={slide} alt='' />
          </div>
        </div>
      </div>

      <div className='item-container'>
        <h1>Unleash the Flavorful World of <b>Tasteee</b></h1>
        <div className='filter-buttons'>
          <button onClick={() => filterItemsByPrice(0, 200)} className='fil_btn1'>200 Below</button>
          <button onClick={() => filterItemsByPrice(200, 350)} className='fil_btn2'>200 to 350</button>
          <button onClick={() => filterItemsByPrice(350, 450)}className='fil_btn3'>350 to 450</button>
          <button onClick={() => filterItemsByPrice(450, Infinity)}className='fil_btn4'>450 or More</button>
          <button onClick={resetFilter} className='fil_btn5'>All Items</button>
          {priceRange && <p className='percent'>Price Range: {priceRange}</p>}
        </div>
        <ul className='item-list'>
          {/* {item.map(item => (
            <ItemContainer title={item.title} description={item.description} price={item.price} image={item.Images} quantity={item.quantity}   />
            

            // <p key={item.id} className='item'>
            //    <div className='icons1'>
            //    <li> <AiOutlineShoppingCart  className='icn' /></li>
            //   <li> <BsEye className='icn' /></li>
            //   </div>
            //   <img src={ item.img} alt={item.title} style={{ maxWidth: '200px' }} />
             
            //   <h3>{item.title}</h3>
            //   <p>{item.description}</p>
            //   <p>MRP: {item.mrp}</p>
            // </p>
          ))} */}
           {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <ItemContainer state={props.state} key={item.id} title={item.title} description={item.description} price={item.price} image={item.Images} quantity={item.quantity} />
            ))
          ) : (
            item.map(item => (
              <ItemContainer state={props.state} key={item.id} title={item.title} description={item.description} price={item.price} image={item.Images} quantity={item.quantity} />
            ))
          )}
        </ul>
       
      </div>
    </div>
  );
};

export default Home1;


























// import React from 'react'
// import './Home1.css'
// import img from '../Home1/img/food-4142.jpg'  
// // import img2 from '../../Assets/slidetext.png'
// import slide from '../Home1/img/slidess.png'
// import { apiValue } from '../../Api/ApiFood'

// const Home1 = () => {


  
//   return (
//     <div>
//     <div>
//         <div className='imge'>
//             <img src={img} alt="" />
//             <div className="image-text">
             
//              <img src={slide} alt="" />
//              </div>
//         </div>
// <div className='full-data'>
 
//   {
//     apiValue.map((items) => {
//       return  (
//         <>
//         <div className='box1' key={items.id}>
//           <div className='img_box1'>
//             <img src={items.img}alt="" />
//             <div className='details1'>
//               <h4>{items.category} </h4>
//               <h2>{items.title} </h2>
//               <p>{items.description} </p>
//               <h3> {items.mrp}</h3>
//             </div>
//           </div>

//         </div>
//         </>
//       )
//     })
//   }
// </div>
// </div>
    
// </div>

//   )
// }

// export default Home1




