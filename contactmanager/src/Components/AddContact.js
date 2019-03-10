import React, { Component } from 'react';
import { Consumer } from './Context';
import uuid from 'uuid';
import TextInputGroup from './TextInputGroup';


class AddContact extends Component {

  state={
    name: '',
    email: '',
    phone: '', 
    error:{},
  };

  onChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e, dispatch) => {
    e.preventDefault()

    const { name, email, phone } = this.state

    // check for errors 
    if(name===''){
      return this.setState({error:{name:'Name is required'}})
    }
    if(email===''){
      return this.setState({error:{email:'Email is required'}}) 
    }
    if(phone===''){
      return this.setState({error:{phone:'Phone is required'}})
    }

    const newContact = {
      id: uuid(),
      name: name,
      email: email, 
      phone: phone, 
      errors: {},
    }

    dispatch(
      {type: 'ADD_CONTACT', payload: newContact}
    )

    this.setState({
      name: '',
      email: '',
      phone: '', 
    })

    this.props.history.push("/")
  }


  render() {
    const { name, email, phone, error } = this.state;
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
                  <TextInputGroup 
                    label = 'Name'
                    htmlFor = 'name'
                    name = 'name'
                    id= 'name'
                    value = {name}
                    placeholder = 'Enter Name...'
                    change = {this.onChange}
                    error = {error.name}
                  />
                  <TextInputGroup
                    htmlFor = 'email'
                    label = 'Email'
                    type = 'email'
                    name = 'email'
                    id = 'email'
                    placeholder = 'Enter Email...'
                    value = {email}
                    change = {this.onChange}
                    error = {error.email}
                  />
                  <TextInputGroup
                    htmlFor = 'phone'
                    label = 'Phone Number'
                    name = 'phone'
                    id = 'phone'
                    placeholder = 'Enter Phone Number...'
                    value = {phone}
                    change = {this.onChange}
                    error = {error.phone}
                  />
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
