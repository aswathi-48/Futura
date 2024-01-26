import React from 'react';
import { apiValue } from '../../Api/ApiFood';

const VegItem = () => {
  // Filter only veg items
  const vegItems = apiValue.filter(item => item.category === 'vegItem');

  return (
    <div>
      <h1>VegItem Page</h1>
      <ul>
        {vegItems.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>MRP: {item.mrp}</p>
            <img src={item.img} alt={item.title} style={{ maxWidth: '200px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VegItem;
