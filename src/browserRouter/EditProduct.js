import React, { Component } from "react";

import axios from "axios";

export default class EditProduct extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      price: ""
    };
  }

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const res = await axios.get(
      "http://localhost/reactapi/getProduct.php?id=" + id
    );

    this.setState({
      id: res.data.id,
      name: res.data.name,
      price: res.data.price
    });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state);
    await axios.post("http://localhost/reactapi/editProduct.php", this.state);
    this.props.history.push("/Table");
  };

  render() {
    return (
      <div>
        <h5>Edit User</h5>
        <form onSubmit={this.handleSubmit}>
          <input
            type="hidden"
            name="id"
            value={this.state.id}
            onChange={this.handleChange}
          />
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label for="price">Price</label>
            <input
              type="text"
              name="price"
              className="form-control"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
