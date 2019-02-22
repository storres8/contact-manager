import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const { name, email, phone, id}= this.props

    const cardStyle={
        width: '18rem'
    }

    return (
        <div>
            <div className="container row justify-content-center">
                <div className="card" style={cardStyle} >
                    <div className="card-header">
                        {name}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className ="list-group-item">{email}</li>
                        <li className="list-group-item">{phone}</li>
                    </ul> 
                </div>
            </div>
        </div>
    )
  }
}

export default Contact 