import React, { Component } from 'react';
import "../Assets/Contact.css"

class Contact extends Component {
    
    state={
        dropDown: false 
    }


    handleDropDown = (e) =>{
        this.setState({dropDown: !this.state.dropDown})
    }

  render() {
    const { name, email, phone, id}= this.props

    const cardStyle={
        width: '28rem'
    }  

    const deleteStyle={
        float:"right"
    }

    return (
        <div className="container">
            <div className="container row justify-content-center" id="cards">
                <div className="card" style={cardStyle} >
                    <div className="card-header">   
                        <h1 id="contactName">
                            {name}
                            <i 
                                className="fas fa-caret-down" id="dropDown"
                                onClick = {this.handleDropDown}
                            ></i>
                            
                        </h1>
                        <div style={deleteStyle}><i className="fas fa-trash-alt"></i></div>
                    </div>
                    {this.state.dropDown ? 
                        (<ul className="list-group list-group-flush">
                            <li className ="list-group-item"><h5>{email}</h5></li>
                            <li className="list-group-item"><h5>{phone}</h5></li>
                        </ul>) 
                            : null
                    }
                </div>
            </div>
        </div>
    )
  }
}

export default Contact 