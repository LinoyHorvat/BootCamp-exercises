// import the react and reactDom libraries
import React from "react";
import ReactDOM from "react-dom";
// import Box from "./Box.js";

// class Card extends React.Component {
//   render() {
//     return (
//       <div>
//         <button>Increase</button>
//         <button>Decrease</button>
//       </div>
//     );
//   }
// }

class App extends React.Component {
  state = { fontSize: 0, textColor: "black" };
  Increase (){
    if (this.state.fontSize > 0) this.setState({ color: "green"})
    this.setState({ fontSize: this.state.fontSize + 1})
    console.log(this.state.fontSize);
  }
  Decrease (){
    if (this.state.fontSize < 0) this.setState({ color: "red"})
    this.setState({ fontSize: this.state.fontSize - 1})
    console.log(this.state.fontSize);
  }
  
  render() {
    return (
      <div>
      <button onClick={this.Increase.bind(this)}>Increase</button>
      <button onClick={this.Decrease.bind(this)}>Decrease</button>
      <div className="label" style={{color:`${this.state.color}`,fontSize: `${30 + this.state.fontSize +"px"}`}}>current value is {this.state.fontSize}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
