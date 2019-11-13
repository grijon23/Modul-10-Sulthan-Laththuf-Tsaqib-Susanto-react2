import React, { Component } from "react";

import axios from "axios";

export default class AddProduct extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      price: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state);
    await axios.post("http://localhost/reactapi/addProduct.php", this.state);
    this.props.history.push("/Table");
  };

  render() {
    return (
      <div className="container">
        <h5>Add User</h5>
        <form onSubmit={this.handleSubmit}>
          <input
            type="hidden"
            value=""
            name="id"
            onChange={this.handleChange}
          />

          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label for="price">Price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              placeholder="Enter price"
              onChange={this.handleChange}
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
