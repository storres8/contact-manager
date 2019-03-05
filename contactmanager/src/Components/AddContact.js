import React, { Component } from 'react';
import { Consumer } from './Context';
import uuid from 'uuid'

class AddContact extends Component {

  state={
    name: '',
    email: '',
    phone: '', 
  };

  onChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e, dispatch) => {
    e.preventDefault()

    const { name, email, phone } = this.state
    const newContact = {
      id: uuid(),
      name: name,
      email: email, 
      phone: phone, 
    }

    dispatch(
      {type: 'ADD_CONTACT', payload: newContact}
    )

    this.setState({
      name: '',
      email: '',
      phone: '', 
    })
  }


  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
      {(value) => { 
          const { dispatch } = value
        return(
            <div className="container">
              <div className="card  mt-3 mb-3 w-50 mx-auto">
              <div className="card-header text-center">
                <h2>Add Contact</h2>
              </div>
              <div className="card-body">
                <form onSubmit= {(e) => this.onSubmit(e, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    name="name"
                    id="name" 
                    className="form-control"
                    placeholder="Enter Name..."
                    value = { name }  
                    onChange = {this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    name="email"
                    id="email" 
                    className="form-control"
                    placeholder="Enter Email..."
                    value = { email }  
                    onChange = {this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                    type="text" 
                    name="phone"
                    id="phone" 
                    className="form-control"
                    placeholder="Enter Phone Number..."
                    value = { phone }  
                    onChange = {this.onChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Ex: xxx-xxx-xxxx</small>
                  </div>
                  <input value="Submit" type="submit" className="btn btn-primary"/>
                </form>
                </div>
              </div>
            </div>
            )
        }}</Consumer>
    )
  }
}

export default AddContact
