import React, { useEffect, useState } from 'react';
import { apiValue } from '../../Api/ApiFood';
import './Pizza.css';
import { BsEye } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ItemView, postCart } from '../../ApiCallll/ApiCall';
import { Link } from 'react-router-dom';
import PizzaContainer from './PizzaContainer';


const Pizza = () => {
 
  


  // Filter only pizza items
  const [items,setItems] =useState([])
  const pizzaItems = items.filter(item => item.category === 'pizza');
  const title=pizzaItems.map((li)=>li.title)


  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

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
  },[])



  useEffect(() => {
    filterItems();
  }, [selectedPriceRange]);

  const filterItems = () => {
    let filtered = items;
    switch (selectedPriceRange) {
      case 'below200':
        filtered = items.filter(item => item.price < 200);
        break;
      case '200to350':
        filtered = items.filter(item => item.price >= 200 && item.price <= 350);
        break;
      case '350to450':
        filtered = items.filter(item => item.price > 350 && item.price <= 450);
        break;
      case 'above450':
        filtered = items.filter(item => item.price > 450);
        break;
      default:
        break;
    }
    setFilteredItems(filtered);
  };



  return (
    <div className="pizza-container">
      <h1>Taste the Art of Perfectly Crafted Pizzas</h1>
      {/* <div className="price-filter">
        <button onClick={() => setSelectedPriceRange('below200')}>Below 200</button>
        <button onClick={() => setSelectedPriceRange('200to350')}>200 - 350</button>
        <button onClick={() => setSelectedPriceRange('350to450')}>350 - 450</button>
        <button onClick={() => setSelectedPriceRange('above450')}>Above 450</button>
        <button onClick={() => setSelectedPriceRange('all')}>All</button>
      </div> */}
      <div className="pizza-list">
        {/* {pizzaItems.map(item => (
          <PizzaContainer title={item.title} description={item.description} price={item.price} image={item.Images} quantity={item.quantity}  />
          // <div key={data.id} className="pizza-item">
          //    <div className='icon-list'>
          //      <li> <AiOutlineShoppingCart  className='icns'/></li>
          //    <Link to={`/pizzaview/${data._id}`}> <li > <BsEye className='icns' /></li> </Link>
          //     </div>
          //   {data && <img src={`${process.env.PUBLIC_URL}/Images/${data.Images}`} width={50} />}
          //   <h3>{data.title}</h3>
          //   <p>{data.description}</p>
          //   <p>MRP: {data.price}</p>
          // </div>
        ))} */}
        
{filterItems. length > 0 ?(
  filterItems.map(item => (
    <PizzaContainer title={item.title} description={item.description} price={item.price} image={item.Images} quantity={item.quantity}  />

  ))
):(
  pizzaItems.map(item => (
    <PizzaContainer title={item.title} description={item.description} price={item.price} image={item.Images} quantity={item.quantity}  />
   
  ))
)}



      </div>
    </div>
  );
};

export default Pizza;


// {filterItems. length > 0 ?(
//   filterItems.map(item => (
//     <PizzaContainer title={item.title} description={item.description} price={item.price} image={item.Images} quantity={item.quantity}  />

//   ))
// ):(
//   pizzaItems.map(item => (
//     <PizzaContainer title={item.title} description={item.description} price={item.price} image={item.Images} quantity={item.quantity}  />
   
//   ))
// )}








// import React, { useEffect, useState } from 'react';
// import { apiValue } from '../../Api/ApiFood';
// import './Pizza.css';
// import { BsEye } from 'react-icons/bs';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { ItemView, postCart } from '../../ApiCallll/ApiCall';
// import { Link } from 'react-router-dom';


// const Pizza = () => {
 


//   // Filter only pizza items
//   const [items,setItems] =useState([])
//   const pizzaItems = items.filter(item => item.category === 'pizza');
//   const title=pizzaItems.map((li)=>li.title)

//   useEffect(()=> {
//     const viewItemss = async(id) =>{
//       console.log('dataaa',id);
//       try{
//         const datas =await ItemView();
//             setItems(datas.data)
//             console.log("dataaa",datas);
//       }catch(err){

//       }
//     }
//     viewItemss()
//   })

//   return (
//     <div className="pizza-container">
//       <h1>Taste the Art of Perfectly Crafted Pizzas</h1>
//       <div className="pizza-list">
//         {pizzaItems.map(data => (
//           <div key={data.id} className="pizza-item">
//              <div className='icon-list'>
//                <li> <AiOutlineShoppingCart  className='icns'/></li>
//              <Link to={`/pizzaview/${data._id}`}> <li > <BsEye className='icns' /></li> </Link>
//               </div>
//             {data && <img src={`${process.env.PUBLIC_URL}/Images/${data.Images}`} width={50} />}
//             <h3>{data.title}</h3>
//             <p>{data.description}</p>
//             <p>MRP: {data.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pizza;











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

