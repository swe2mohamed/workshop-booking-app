import React, { useState } from "react";

const ToggleButton = () => {
  const [name, setName] = useState("Alice");
  const handelClick = () => {
    setName("Sarah");
    console.log(name);
  };
  return (
    <div>
      <button onClick={handelClick}> Click </button>
      <p>{name}</p>
    </div>
  );
};

export default ToggleButton;
