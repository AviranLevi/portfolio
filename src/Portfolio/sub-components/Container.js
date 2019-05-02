import React, { Component } from 'react';
import '../../styles/container.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Skills from './container sub-components/Skills';
import Projects from './container sub-components/Projects';

class Container extends Component {
    render() {
        return (
            <div className="container">
                <ScrollAnimation className="container-layer" animateIn="fadeInDown" animateOut="fadeOut" initiallyVisible={true}>
                    <Skills />
                    <Projects />
                </ScrollAnimation>
            </div>
        );
    }
}

export default Container;
