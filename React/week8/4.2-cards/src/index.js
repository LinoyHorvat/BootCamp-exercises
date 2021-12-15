// import the react and reactDom libraries
import React from "react";
import ReactDOM from "react-dom";
// import Box from "./Box.js";

const Card = (props) => {
  return (<div >
    <div className="title">{props.title}</div>
    <div className="description">{props.description}</div>
    <button>Share</button>
    <button>Explore</button>
    </div>);
};
const App = () => {
  return(
  <div>
  <Card title = "title1" description = "description2"/>
  <Card title = "title1" description = "description2"/>
  <Card title = "title1" description = "description2"/>

  </div>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
