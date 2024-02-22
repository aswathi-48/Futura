// Higher-level component (e.g., App.js)
import React, { useState } from 'react';
import Navbar from './Navbar';
import Home1 from './Home1';

const App1 = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Home1 searchQuery={searchQuery} />
    </div>
  );
};

export default App1;
