import React from 'react';

// const Btn = props => {
//   const counter = 0; 
//   return (
//     <div>
//     <button type="button" className = "text" style={{fontWeight : "bold"}}>
//     {props.text}</button>
//     <p>{counter}</p>
//     </div>
//   )
// }
const Box = props => {
  return (
    <div>
    <div className="box" style={{background: "yellow", height: "100px", width: "100px"}}></div>
    </div>
  )
}

export default Box;
