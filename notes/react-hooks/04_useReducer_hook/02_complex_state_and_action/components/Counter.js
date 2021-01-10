import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "dec":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "reset":
      return initialState;

    case "inc2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "dec2":
      return { ...state, secondCounter: state.secondCounter - action.value };

    default:
      return state;
  }
};
const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>count : {count.firstCounter}</div>
      <button onClick={() => dispatch({ type: "inc", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "dec", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <button onClick={() => dispatch({ type: "inc", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "dec", value: 5 })}>
        Decrement 5
      </button>

      <hr />
      <div>2nd count : {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "inc2", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "dec2", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
