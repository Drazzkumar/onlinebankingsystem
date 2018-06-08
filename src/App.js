import React, { Component } from 'react';
import NavBar from './components/common/NavBar';
import {
  Switch,
  Route
} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
