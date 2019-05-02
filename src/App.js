import React, { Component } from 'react';
import './App.css';
import "animate.css/animate.min.css";


import Portfolio from "./Portfolio/Portfolio"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Portfolio />
      </div>
    );
  }
}

export default App;
