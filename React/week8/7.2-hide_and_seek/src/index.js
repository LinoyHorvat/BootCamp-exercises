// import the react and reactDom libraries
import React from "react";
import ReactDOM from "react-dom";
import Box from "./Box.js";


class App extends React.Component {
  state = {isHidden: true};
  handleToggle = () => {
    this.setState((state) => ({
      isHidden: !state.isHidden}))
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
      <button onClick={this.handleToggle}> hide/seek</button>
      {this.state.isHidden ? <Box></Box>: null}
      </div>
    );
  }
}


ReactDOM.render(<App  />, document.getElementById("root"));
