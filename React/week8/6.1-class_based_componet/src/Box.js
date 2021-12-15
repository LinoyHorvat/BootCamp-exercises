import React from "react";

const Box = (props) => {
  return <div style={{ position: `absolute`,background: `${props.background}`, height: `${props.height}`, width: `${props.height}`,top: `${props.top}`, left: `${props.left}` }}></div>;
};

export default Box;
