import React, { useState } from "react";

const Counter = () => {
  const initialName = { firstName: "", lastName: "" };
  const [name, setName] = useState(initialName);

  const handleFirstName = (e) => {
    setName({ ...name, firstName: e.target.value });
  };

  const handleLastName = (e) => {
    setName({ ...name, lastName: e.target.value });
  };

  return (
    <div>
      <form>
        <input type="text" value={name.firstName} onChange={handleFirstName} />
        <input
          type="text"
          value={name.lastName}
          onChange={handleLastName}
        ></input>
        <h2>First name :{name.firstName}</h2>
        <h2>Last name :{name.lastName}</h2>

        {/* to see name object */}
        {/* <h2>{JSON.stringify(name)}</h2> */}
      </form>
    </div>
  );
};

export default Counter;
