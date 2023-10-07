import React from 'react'

function LocalStorage() {
    localStorage.setItem('Keys','hello')


    const handleClearLocalStorage = () => {
      localStorage.clear();
      console.log('Local storage cleared.');
    };

  return (
    <div>
      <div>Localstorage</div>
      <div className='button'>
      <button onClick={handleClearLocalStorage}>Clear Local Storage</button>
      </div>
    </div>
  )
}

export default LocalStorage