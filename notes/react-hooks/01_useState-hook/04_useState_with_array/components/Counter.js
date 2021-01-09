import React, { useState } from "react";

const Counter = () => {
  const [items, setItems] = useState([]);

  const addNumbers = () => {
    setItems([...items, Math.floor(Math.random() * 10) + 1]);
  };

  return (
    <div>
      <button onClick={addNumbers}>add a number</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Counter;
