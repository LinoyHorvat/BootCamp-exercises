import React, { useState } from "react";

const Box = ({ text, maxLength }) => {
  let newText = text.substring(0, maxLength) + "...";
  const [changedTxt, setChangeTxt] = useState(newText);
  const [isOn, setIsOn] = useState(false);
  const [btnTxt, setBtnTxt] = useState("read-more");
  let style = {
    display: "none",
    color: "blue",
    cursor: "pointer",
  };

  const handleTxt = (text) => {
    if (!isOn) {
      setChangeTxt(text);
      setIsOn(true);
      setBtnTxt("read-more");
    } else {
      setChangeTxt(newText);
      setIsOn(false);
      setBtnTxt("show-less");
    }
  };

  const checkTxt = () => {
    if (text.length > maxLength) {
      style.display = "inline-block";
    }
  };

  return (
    <div>
      {checkTxt()}
      <p>{changedTxt}</p>
      <div style={style} onClick={() => handleTxt(text)}>
        {btnTxt}
      </div>
    </div>
  );
};

export default Box;
