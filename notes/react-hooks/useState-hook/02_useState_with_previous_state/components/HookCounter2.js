import React, { useState } from "react";

const HookCounter2 = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const increment5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount(count + 1);
    }
  };

  const increment5UsingPrevState = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1);
    }
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(initialCount)}>Decrement</button>

      <p> if we are not using prevState then inc 5 won't work</p>

      <button onClick={increment5}>Increment5</button>
      <p> it'll work using preState</p>
      <button onClick={increment5UsingPrevState}>
        increment5UsingPrevState
      </button>
    </div>
  );
};

export default HookCounter2;
