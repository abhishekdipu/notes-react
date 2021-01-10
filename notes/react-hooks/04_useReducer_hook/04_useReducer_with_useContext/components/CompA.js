import React, { useContext } from "react";
import { CountContext } from "../App";

const CompA = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      CompA
      <button onClick={() => countContext.countDispatch("inc")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("dec")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default CompA;
