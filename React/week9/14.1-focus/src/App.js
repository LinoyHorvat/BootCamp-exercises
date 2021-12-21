import React, {Component} from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom';
// import Player from './Player'

class App extends Component {
  componentDidMount(){
    this.nameInput.focus();
  }

  render() {
    return (
      <div>
       <input ref={(input) => { this.nameInput = input; }}></input>  
      </div>
    )
  }
}

export default App;

