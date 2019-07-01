import React, { Component } from 'react';
// import { Router, Route, Link } from 'react-router'
import Home from './pages/home';
import ErrorPage from './pages/error-page'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
     <Router history="history">
      <Route path="/home" component={Home}/>
      <Route path="/error-page" component={ErrorPage}/>
    </Router>
    );
  }
}

export default App;
