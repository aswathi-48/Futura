import React, { useReducer } from 'react';

const UsereduceruseIF = () => {
  const InitialState = 0;

  const reducer = (state, action) => {
    console.log('action', action, 'state', state);
    console.log(action);

    if (action.type === 'increase')
     {
      return state + 1;
    } 
    else if (action.type === 'decrease') 
    {
      return state - 1;
    } 
    else if (action.type === 'increament2') 
    {
      return state + 2;
    } 
    else if (action.type === 'Decrement2')
     {
      return state - 2;
    } 
    else 
    {
      return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: 'increase' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrease' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'increament2' })}>Increment2</button>
      <button onClick={() => dispatch({ type: 'Decrement2' })}>Decrement2</button>
    </div>
  );
};

export default UsereduceruseIF;
