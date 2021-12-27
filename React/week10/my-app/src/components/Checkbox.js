import React, { useState } from "react";

const Checkbox = ({ name, handleStatuses }) => {
  const [checked, setCheck] = useState("")

  const handleClick = () => {
    setCheck(!checked)
    handleStatuses(name)
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleClick}
      />
      <label>{name}</label>
    </div>
  );
};

export default Checkbox;
