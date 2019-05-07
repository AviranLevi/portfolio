import React, { Component } from 'react';
import '../../styles/header.css';
import ScrollAnimation from 'react-animate-on-scroll';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight" initiallyVisible={true}>
                    <h1 className="header-hi">Hi!</h1>
                    <div className="desc-box">
                        <h1 className="desc-title">I'm Aviran. Nice to meet you!</h1>
                        <p className="desc-summary">I'm Fullstack Web Developer & Designer focused on
                            UI / UX & Web Solutions, <br /> Specializing in React and Node.js.</p>
                    </div>
                </ScrollAnimation>
            </div>
        );
    }
}

export default Header;
