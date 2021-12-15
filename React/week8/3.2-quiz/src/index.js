// import the react and reactDom libraries
import React from "react";
import ReactDOM from "react-dom";
// import Box from "./Box.js";

const App = () => {
  return(
  <div>
  <div className="QuizTitle"><h1>How Do You Like FrontEnd</h1></div>
  <div className="Q1Title">How much do you love FrontEnd?</div>
  <div className="Q1"><input type="range"></input></div>
  <div className="Q1Title">what is your favorite FrontEnd topic?</div>
  <div className="Q1"><input type="text"></input></div>
  </div>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
