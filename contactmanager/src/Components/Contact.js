import React, { Component } from "react";
import "../Assets/Contact.css";
import { Consumer } from "./Context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    dropDown: false
  };

  handleDropDown = e => {
    this.setState({ dropDown: !this.state.dropDown });
  };

  handleDelete = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { name, email, phone, id } = this.props;

    const cardStyle = {
      width: "28rem"
    };

    const deleteStyle = {
      float: "right"
    };

    const editStyle = {
      marginRight: "16px"
    };

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="container">
              <div className="container row justify-content-center" id="cards">
                <div className="card border-secondary" style={cardStyle}>
                  <div className="card-header">
                    <h1 id="contactName">
                      {name}
                      <i
                        className="fas fa-caret-down"
                        id="dropDown"
                        onClick={this.handleDropDown}
                      />
                    </h1>
                    <div style={deleteStyle}>
                      <Link to={`contact/edit/${id}`}>
                        <i className="fas fa-pencil-alt" style={editStyle} />
                      </Link>

                      <i
                        className="fas fa-trash-alt"
                        onClick={() => this.handleDelete(id, dispatch)}
                      />
                    </div>
                  </div>
                  {this.state.dropDown ? (
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <h5>Email: {email}</h5>
                      </li>
                      <li className="list-group-item">
                        <h5>Phone: {phone}</h5>
                      </li>
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
