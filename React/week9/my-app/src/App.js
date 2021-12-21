import React, {Component} from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import axios from 'axios'
import ReactDOM from 'react-dom';
import Header from './Header'
import Homepage from './Homepage'
import Products from './Products'

const pageOne = () => {
  return <div>PageOne</div>
}
const pageTwo = () => {
  return <div>pageTwo</div>
}


class App extends Component {

  render() {
    return (
      <div>
      <BrowserRouter> 
      <div>
      <Route path="/" exact component = {pageOne} />
      <Route path="/pageTwo" exact component = {pageTwo} />
      </div>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;

