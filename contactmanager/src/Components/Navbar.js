import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Contact Manager</a>
            <a className="navbar-brand" href="#" className="ml-auto">Home</a>
        </nav>
      </div>
    )
  }
}

export default Navbar
