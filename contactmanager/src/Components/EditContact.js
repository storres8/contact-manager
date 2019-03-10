import React, { Component } from "react";
import { Consumer } from "./Context";
import TextInputGroup from "./TextInputGroup";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    error: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(resp =>
      this.setState({
        name: resp.data.name,
        email: resp.data.email,
        phone: resp.data.phone
      })
    );
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e, dispatch) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // check for errors
    if (name === "") {
      return this.setState({ error: { name: "Name is required" } });
    }
    if (email === "") {
      return this.setState({ error: { email: "Email is required" } });
    }
    if (phone === "") {
      return this.setState({ error: { phone: "Phone is required" } });
    }

    const { id } = this.props.match.params;

    const updContact = {
      name: name,
      email: email,
      phone: phone
    };

    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact)
      .then(resp =>
        dispatch({
          type: "UPDATE_CONTACT",
          payload: resp.data
        })
      );

    // clears state
    this.setState({
      name: "",
      email: "",
      phone: ""
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, error } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="container">
              <div className="card  mt-3 mb-3 w-50 mx-auto">
                <div className="card-header text-center">
                  <h2>Edit Contact</h2>
                </div>
                <div className="card-body">
                  <form onSubmit={e => this.onSubmit(e, dispatch)}>
                    <TextInputGroup
                      label="Name"
                      htmlFor="name"
                      name="name"
                      id="name"
                      value={name}
                      placeholder="Enter Name..."
                      change={this.onChange}
                      error={error.name}
                    />
                    <TextInputGroup
                      htmlFor="email"
                      label="Email"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Email..."
                      value={email}
                      change={this.onChange}
                      error={error.email}
                    />
                    <TextInputGroup
                      htmlFor="phone"
                      label="Phone Number"
                      name="phone"
                      id="phone"
                      placeholder="Enter Phone Number..."
                      value={phone}
                      change={this.onChange}
                      error={error.phone}
                    />
                    <input
                      value="Edit Contact"
                      type="submit"
                      className="btn btn-primary"
                    />
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
