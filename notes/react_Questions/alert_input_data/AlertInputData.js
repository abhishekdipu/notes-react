import React, { useState } from "react";

const AlertInputData = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const alterInputs = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
  };

  return (
    <>
      <form onSubmit={alterInputs}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AlertInputData;
