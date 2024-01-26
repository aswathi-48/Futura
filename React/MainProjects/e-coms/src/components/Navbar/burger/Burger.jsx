import React from 'react';
import { apiValue } from '../../Api/ApiFood';
import './Burger.css'
const Burger = () => {
  // Filter only burger items
  const burgerItems = apiValue.filter(item => item.category === 'burger');

  return (
    <div className='container'>
      <h1>Burger Page</h1>
      <div className='burger-list'>
        {burgerItems.map(item => (
          <div className='burger-item' key={item.id}>
            <img src={item.img} alt={item.title} style={{ maxWidth: '200px' }} className='buregr-img' />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>MRP: {item.mrp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Burger;
