// useReducer counter example
import React, { useReducer } from 'react';

function Counter() {
  /*
    First render will create the state, which will then persist through future renders
     */
  /*
    sum = state
    dispatch = action
    useReducer hook returns the sum/state + the dispatch/action
    */
  /*
    onClick we run addOne function which does a dispatch of 8 (or whatever we pass in)
    */
  const [sum, dispatch] = useReducer((state, action) => state + action, 0);

  function addOne() {
    dispatch(8);
  }

  return (
    <div>
      <h4>{sum}</h4>
      <button type="button" onClick={addOne}>
        Add 1
      </button>
    </div>
  );
}

export default Counter;
