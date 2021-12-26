import React, { Component } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import "./App.css";
import ProductDetails from "./components/ProductDetails";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route path="/" exact component={HomePage} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:id" exact component={ProductDetails} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
