// import the react and reactDom libraries
import React from "react";
import ReactDOM from "react-dom";
import Btn from "./Btn.js";


class App extends React.Component {
  state = {selectedColor: ""}
  
  onClick = (val) => {this.setState({selectedColor: val});}
  changeColor = () => {
    console.log("in");
    this.setState({selectedColor: this.state})
  }
  render() {
    const colors = ["blue","red","yellow"];
    return (
      <div>
      {colors.map((color)=>{
        return (<Btn color={color} onClick={this.onClick}/>);
      })}
      <h1>The selected color is :  {this.state.selectedColor}</h1>
      </div>
    );
  }
}


ReactDOM.render(<App  />, document.getElementById("root"));
