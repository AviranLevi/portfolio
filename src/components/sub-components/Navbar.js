import React, { Component } from 'react';
import '../../styles/navbar.css';
import { Link } from "react-scroll";

class Navbar extends Component {
    render() {
        let logo = require("../../images/logo.png")
        return (
            <div className="navbar">
                <Link activeClass="active" to="header" smooth="true" duration={500}>
                    <img src={logo} alt="logo" />
                </Link>
                <div className="navbar-menu">
                    <Link activeClass="active" className="navbar-projects" to="container-layer" smooth={true} duration={500}>
                        projects
                    </Link>
                </div>
                <button>
                    <Link activeClass="active" className="navbar-projects" to="footer-layer" smooth={true} duration={500}>
                        say hello
                    </Link>
                </button>
            </div>
        );
    }
}

export default Navbar;
