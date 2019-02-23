import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <h1 className="navbar-brand" >Contact Manager</h1>
            <a className="navbar-brand ml-auto" href="https://google.com">Home</a>
        </nav>
      </div>
    )
  }
}

export default Navbar
