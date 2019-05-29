import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './containers/nav';
import Home from './containers/home';
import Details from './containers/details';
import Login from './containers/login';
import Register from './containers/register';
import List from './containers/list';

import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/details' component={Details} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />

          <Route exact path='/list' component={List} />
          <Redirect from="/list/" to="/" />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
