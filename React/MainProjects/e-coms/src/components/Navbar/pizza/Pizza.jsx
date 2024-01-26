import React from 'react';
import { apiValue } from '../../Api/ApiFood';
import './Pizza.css';

const Pizza = () => {
  // Filter only pizza items
  const pizzaItems = apiValue.filter(item => item.category === 'pizza');

  return (
    <div className="pizza-container">
      <h1>Pizza Page</h1>
      <div className="pizza-list">
        {pizzaItems.map(item => (
          <div key={item.id} className="pizza-item">
            <img src={item.img} alt={item.title} className="pizza-image" width={100}/>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>MRP: {item.mrp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pizza;




















            {/* {pizza && <img src={`${process.env.PUBLIC_URL}/pizza/${pizza.Images}`} height={100}/>} */}


//             import React from 'react'
// import { apiValue } from '../../Api/ApiFood'
// import './Pizza.css'


// const Pizza = () => {
//   return (
    
//     <div>
//        <div className='main-pizza'> 
//       {/* <h1>Pizza Menu</h1> */}
//       <div className="pizza-list">
//         {apiValue.map((pizza) => (
//           <div key={pizza.id} className="pizza-item">
//          <img src={pizza.Images} alt={pizza.title} style={{ height: '40px' }} />
//             <h2>{pizza.title}</h2>
//             <p>{pizza.description}</p>
//             <p>
//               <strong>mrp:</strong> ${pizza.mrp}
//             </p>
//             {/* Add other details you want to display */}
//           </div>

          
//         ))}
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Pizza

