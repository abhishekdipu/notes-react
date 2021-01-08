//mount and unmount HookaMouseMove on click of a button

import React, { useState, useEffect } from "react";
import HookMouseMove from "./HookMouseMove";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>

      {display && <HookMouseMove />}
    </div>
  );
};

export default MouseContainer;
