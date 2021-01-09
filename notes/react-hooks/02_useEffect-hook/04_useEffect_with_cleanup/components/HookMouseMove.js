import React, { useState, useEffect } from "react";

const HookMouseMove = () => {
  const initialCoordinates = { x: 0, y: 0 };
  const [coordinates, setCoordinates] = useState(initialCoordinates);

  const getMousePostion = (e) => setCoordinates({ x: e.clientX, y: e.clientY });

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", getMousePostion);

    //doing cleanup here
    return () => {
      window.removeEventListener("mousemove", getMousePostion);
    };
  }, []);

  return (
    <div>
      X: {coordinates.x}, Y:{coordinates.y}
    </div>
  );
};

export default HookMouseMove;
