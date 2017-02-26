import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Redux!</h2>
        </div>
       <p className="App-intro">
           Check the browser console for redux output. Press F12 Key, and click on Console.
        </p>
        <p className="App-intro">
          To play around, edit <code>src/index.js</code> and save to reload!
        </p>
      </div>
    );
  }
}

export default App;
