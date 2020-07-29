import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/Dashboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MovieDetails from './components/MovieDetails';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/movie/:id' component={MovieDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
