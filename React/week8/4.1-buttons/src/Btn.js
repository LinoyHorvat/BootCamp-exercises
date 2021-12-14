import React from 'react';

const Btn = props => {
  return (
    <div>
    <button type="button" className = "text" style={{fontWeight : "bold"}}>
    {props.text}</button>
    </div>
  )
}

export default Btn;
