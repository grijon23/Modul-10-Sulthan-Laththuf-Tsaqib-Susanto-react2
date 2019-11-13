import React, { Component } from "react";

import CardProduct from "../components/product/CardProduct";
import AddProduct from "./AddProduct";

import axios from "axios";
import { Link } from "react-router-dom";

export default class Table extends Component {
  constructor() {
    super();
    this.state = {
      product: []
    };
  }

  componentDidMount = async () => {
    await axios.get("http://localhost/reactapi/product.php").then(response =>
      this.setState({
        product: response.data
      })
    );
    console.log(this.state);
  };
  render() {
    const renderData = this.state.product.map(product => {
      return (
        <CardProduct
          product={product}
          key={product.id}
          refresh={this.componentDidMount}
        />
      );
    });
    return (
      <div className="container mt-3">
        <Link className="btn btn-dark" to={"/AddProduct"}>
          Add Product
        </Link>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{renderData}</tbody>
        </table>
      </div>
    );
  }
}
