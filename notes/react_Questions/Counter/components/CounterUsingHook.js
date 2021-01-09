import React, { useState } from "react";

const CounterUsingHook = () => {
  let initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>

      {/* <button onClick={() => setCount((prevState) => prevState + 1)}>+1</button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>-1</button> */}
    </div>
  );
};

export default CounterUsingHook;
