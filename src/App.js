import React, { Component } from 'react';
import './App.css';
import "animate.css/animate.min.css";

import Portfolio from './components/Portfolio'
import AlertPopup from './components/sub-components/footer sub-components/AlertPopup';

class App extends Component {

  constructor() {
    super()
    this.state = {
      alertPopup: false,
      openFront: false,
      openBack: false,
      openOther: false,
      hover: false,
      email: "aveloofficial@gmail.com"
    }
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleBodyClick);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleBodyClick);
  }

  handleClick = () => {
    this.setState({ alertPopup: true })
  }

  handleBodyClick = () => {
    this.setState({
      alertPopup: false,
      openFront: false,
      openBack: false,
      openOther: false,
      hover: false
    })
  }

  handleOpenFront = () => {
    this.setState({ openFront: true })
  }

  handleOpenBack = () => {
    this.setState({ openBack: true })
  }

  handleOpenOther = () => {
    this.setState({ openOther: true })
  }

  stopHover = () => {

  }

  render() {
    return (
      <div className="App">

        <Portfolio
          email={this.state.email}
          openPopup={this.handleClick}
          openFront={this.state.openFront}
          openBack={this.state.openBack}
          openOther={this.state.openOther}
          handleOpenFront={this.handleOpenFront}
          handleOpenBack={this.handleOpenBack}
          handleOpenOther={this.handleOpenOther}
        />

        {this.state.alertPopup ? <AlertPopup alertPopup={this.state.alertPopup} /> : null}

      </div>
    );
  }
}

export default App;
