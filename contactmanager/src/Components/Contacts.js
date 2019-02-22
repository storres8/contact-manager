import React, { Component } from 'react'
import { Consumer } from './Context'

class Contacts extends Component {
  render() {
    return (
        <Consumer>
         { 
            (value) =>{
                const { contacts } = value;
                return(
                    <div>
                        <h1>Hello from the Contacts Component</h1>
                        {console.log(contacts)}
                    </div>
                )
            }
         }
        </Consumer>
    )
  }
}

export default Contacts
