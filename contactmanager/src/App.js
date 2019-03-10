import React, { Component } from 'react';
import Contacts from './Components/Contacts';
import Navbar from './Components/Navbar';
import { Provider } from './Components/Context'; 
import AddContact from './Components/AddContact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './Components/pages/About';


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            < Navbar/>
            <Switch>
              <Route exact path="/" component= {Contacts} />
              <Route exact path="/about" component= {About} />
              <Route exact path="/contact/add" component={AddContact} /> 
            </Switch>
          </div>
          </Router>
      </Provider>
    );
  }
}

export default App;
