import React, { Component } from 'react';
import '../../styles/navbar.css';
import { Link } from "react-scroll";

class Navbar extends Component {
    render() {
        let logo = require("../../images/logo.png")
        return (
            <div className="navbar">
                <img src={logo} alt="logo" />
                <div className="navbar-menu">
                    <Link activeClass="active" className="navbar-projects" to="container" spy={true} smooth={true} duration={500}>
                        projects
                    </Link>
                </div>
                <button>
                    <Link activeClass="active" className="navbar-projects" to="footer" spy={true} smooth={true} duration={500}>
                        say hello
                    </Link>
                </button>
            </div>
        );
    }
}

export default Navbar;
