import React, { Component } from 'react'

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

  handleSubmit = (e) =>{
    e.preventDefault()
    console.log(this.state)
  }


  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="container">
        <div className="card  mt-3 mb-3 w-50 mx-auto">
          <div className="card-header text-center">
            <h2>Add Contact</h2>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
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
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddContact
