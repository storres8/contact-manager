import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(contact => {
          return contact.id !== action.payload;
        })
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => {
      return this.setState(state => {
        return reducer(state, action);
      });
    }
  };

  componentDidMount() {
    /*fetching data through the fetch API*/
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(resp => resp.json())
    // .then(data => this.setState({contacts:data}))

    // fetching data through axios
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(resp => this.setState({ contacts: resp.data }));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
