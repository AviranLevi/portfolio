import React, { Component } from 'react';
import '../../styles/navbar.css';

class Navbar extends Component {
    render() {
        let logo = require("../../images/logo.png")
        return (
            <div className="navbar">
                <img src={logo} alt="logo" />
                <div className="navbar-menu">projects</div>
                <button>say hello</button>
            </div>
        );
    }
}

export default Navbar;
