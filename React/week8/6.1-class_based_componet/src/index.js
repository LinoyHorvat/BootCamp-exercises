// import the react and reactDom libraries
import React from "react";
import ReactDOM from "react-dom";
// import Box from "./Box.js";

class Card extends React.Component {
  render() {
    return (
      <div style={{border: "1px black solid"}}>
        <div className="title">{this.props.title}</div>
        <div className="description">{this.props.description}</div>
        <button>Share</button>
        <button>Explore</button>
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Card title="title1" description="description2" />
        <Card title="title1" description="description2" />
        <Card title="title1" description="description2" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
