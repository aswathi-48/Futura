import React from 'react';
import { apiValue } from '../../Api/ApiFood';
import './Home1.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import img from '../Home1/img/food-4142.jpg';
import slide from '../Home1/img/slidess.png';
import { BsEye } from 'react-icons/bs';



const Home1 = () => {
  return (
    <div>
      <div>
        <div className='imge'>
          <img src={img} alt='' />
          <div className='image-text'>
            <img src={slide} alt='' />
          </div>
        </div>
      </div>

      <div className='item-container'>
        <h1>All Items</h1>
        <ul className='item-list'>
          {apiValue.map(item => (
            <p key={item.id} className='item'>
               <div className='icons'>
               <li> <AiOutlineShoppingCart  className='icn'/></li>
              <li> <BsEye className='icn' /></li>
              </div>
              <img src={item.img} alt={item.title} style={{ maxWidth: '200px' }} />
             
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>MRP: {item.mrp}</p>
            </p>
          ))}
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




