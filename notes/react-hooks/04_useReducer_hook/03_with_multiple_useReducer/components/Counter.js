// use this approch to store multiple local state

import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <div>count : {count}</div>
      <button onClick={() => dispatch("inc")}>Increment</button>
      <button onClick={() => dispatch("dec")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>

      <hr />

      <div>count 2 : {count2}</div>
      <button onClick={() => dispatch2("inc")}>Increment</button>
      <button onClick={() => dispatch2("dec")}>Decrement</button>
      <button onClick={() => dispatch2("reset")}>Reset</button>
    </div>
  );
};

export default Counter;
