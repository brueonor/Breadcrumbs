/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import Home from './components/Home';
// import Breadcrumb from './components/Breadcrumb';
import './App.css';
// import Patate from './components/Patate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
            <Route exact path="/" component={Home} />

            {/* <Breadcrumb to="/patate" text="patate" componentToRender={() => <p>patate</p>} /> */}
          </header>
        </Router>
      </div>
    );
  }
}

export default App;
