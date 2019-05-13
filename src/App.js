import React, { Component } from 'react';
import './App.css';
import "animate.css/animate.min.css";

import Portfolio from './components/Portfolio'
import AlertPopup from './components/sub-components/footer sub-components/AlertPopup';

class App extends Component {

  constructor() {
    super()
    this.state = {
      openFront: false,
      openBack: false,
      openOther: false,
      hover: true,
      email: "aveloofficial@gmail.com"
    }
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleBodyClick);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleBodyClick);
  }

  handleBodyClick = () => {
    this.setState({
      alertPopup: false,
      openFront: false,
      openBack: false,
      openOther: false,
      hover: true
    })
  }

  handleOpenFront = () => {
    this.setState({ openFront: true, hover: false })
  }

  handleOpenBack = () => {
    this.setState({ openBack: true, hover: false })
  }

  handleOpenOther = () => {
    this.setState({ openOther: true, hover: false })
  }


  render() {
    return (
      <div className="App">

        <Portfolio
          email={this.state.email}
          openFront={this.state.openFront}
          openBack={this.state.openBack}
          openOther={this.state.openOther}
          handleOpenFront={this.handleOpenFront}
          handleOpenBack={this.handleOpenBack}
          handleOpenOther={this.handleOpenOther}
          hover={this.state.hover}
        />

        {this.state.alertPopup ? <AlertPopup alertPopup={this.state.alertPopup} /> : null}

      </div>
    );
  }
}

export default App;
