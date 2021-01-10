// here if we won't use useRef then we can get access to 'interval' in return, as 'interval' is defined inside useEffect so it has local scope
// but by using useRef we can use intervalRef.current everywhere

import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  const intervalRef = useRef();

  useEffect(() => {
    //const interval = setInterval(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      //clearInterval(interval);
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      Timer :- {timer}
      {/* <button onClick={() => clearInterval(interval}> */}
      <button onClick={() => clearInterval(intervalRef.current)}>
        stop timer
      </button>
    </div>
  );
};

export default Timer;
