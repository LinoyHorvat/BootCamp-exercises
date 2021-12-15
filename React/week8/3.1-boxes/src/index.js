// import the react and reactDom libraries
import React from "react";
import ReactDOM from "react-dom";
import Box from "./Box.js";

const App = () => {
  return(
  <div>
    <div>
      <Box 
      background={"green"} 
      height={"400px"} 
      top= {"0px"} 
      left={"0px"} />
    </div>
    <div>
      <Box 
      background={"blue"} 
      height={"300px"} 
      top= {"50px"} 
      left={"50px"} />
      <Box 
      background={"pink"} 
      height={"200px"} 
      top= {"100px"} 
      left={"100px"} />
      <Box 
      background={"pink"} 
      height={"200px"} 
      top= {"100px"} 
      left={"100px"} />
      <Box 
      background={"purple"} 
      height={"100px"}
      width={"100px"} 
      top= {"110px"} 
      left={"150px"} />
      <Box 
      background={"purple"} 
      height={"100px"} 
      top= {"210px"} 
      left={"150px"} />
    </div>
  </div>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
