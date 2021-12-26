import React, { Component } from "react";
import data from "../store.js";

export default class ProductDetails extends Component {
  state = { product: null };

  componentDidMount() {
    const product = data.find((obj) => {
      return obj.id === Number(this.props.match.params.id);
    });
    this.setState({ product }, () => {
      console.log(this.state.product);
    });
  }

  createProduct() {
    const { title, imageUrl, price, size } = this.state.product;
    return (
      <div>
        <h2>{title}</h2>
        <img src={imageUrl} alt="Product" />
        <div>Price: {price}</div>
        <div>Size: {size}</div>
        <button onClick={this.props.history.goBack}>Back</button>
      </div>
    );
  }

  render() {
    return <>{this.state.product && this.createProduct()}</>;
  }
}
