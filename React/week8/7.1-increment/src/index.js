// import the react and reactDom libraries
import React from "react";
import ReactDOM from "react-dom";
// import Btn from "./Btn.js";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  getCount() {
    this.setState({ count: this.state.count + 1, clicked: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.getCount.bind(this)}>
          Increment = {this.state.count}
        </button>
      </div>
    );
  }
}


ReactDOM.render(<App  />, document.getElementById("root"));
