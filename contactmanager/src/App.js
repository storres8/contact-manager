import React, { Component } from 'react';
import Contacts from './Components/Contacts';
import Navbar from './Components/Navbar';
import { Provider } from './Components/Context'; 
import AddContact from './Components/AddContact';


class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          < Navbar/>
          < AddContact/>
          < Contacts/>
        </div>
      </Provider>
    );
  }
}

export default App;
