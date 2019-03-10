import React, { Component } from 'react';
import { Consumer } from './Context';
import Contact from "./Contact";

class Contacts extends Component {
  render() {
    return (
        <Consumer>
         { 
            (value) =>{
                const { contacts } = value;
                return(
                    <div>
                        <div className="text-center">
                            <h1 className="display-3">Current <span className="text-danger">Contacts</span></h1>
                        </div>
                        {contacts.map(contact => 
                            <Contact 
                                key= {contact.id}
                                id={contact.id}
                                name={contact.name}
                                email={contact.email}
                                phone={contact.phone}
                            />
                        )}
                    </div>
                )
            }
         }
        </Consumer>
    )
  }
}

export default Contacts
