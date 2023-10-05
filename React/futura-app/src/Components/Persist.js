import React from 'react'

function Persist() {
  return (
    <div>
      <h2>Signup Page</h2>
      <div>
      <label for="name">UserName:</label>
      <input type='text' id='username' name='username'/>
      </div>
      <div>
      <label for="name">Email Id:</label>
      <input type='text' id='email' name='email'/>
      </div>
      <div>
      <label for="name">Password:</label>
      <input type='password' id='password' name='password'/>
      </div>
      <button type='submit'>SignUp</button>
    </div>
  );
}

export default Persist