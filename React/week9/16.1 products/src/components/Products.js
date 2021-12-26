import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../store.js";
import ProductDetails from "./ProductDetails.js";

export default class Products extends Component {
  state = { data: [] };

  componentDidMount() {
    this.setState({ data });
  }

  createLinks = () => {
    const { data } = this.state;
    return data.map((item) => {
      return (
        <div key={item.id}>
          <Link to={`/products/${item.id}`}>{item.title}</Link>
        </div>
      );
    });
  };

  render() {
    return <div>{this.createLinks()}</div>;
  }
}
