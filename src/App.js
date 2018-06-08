import React, { Component } from 'react';
import NavBar from './components/common/NavBar';
import {
  Switch,
  Route
} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import RegisterForm from './components/accounts/RegisterForm';
import './App.css';
class App extends Component {

  render() {
    return (
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route path='/register' component={RegisterForm} />

        </Switch>
      </div>
    );
  }
}

export default App;
