import React, { Component } from 'react';
import '../../styles/container.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Skills from './container sub-components/Skills';
import Projects from './container sub-components/Projects';

class Container extends Component {
    render() {
        return (
            <div className="container">
                <ScrollAnimation className="container-layer" animateIn="fadeInRight" animateOut="fadeOutLeft" initiallyVisible={true}>
                    <Skills
                        openFront={this.props.openFront}
                        openBack={this.props.openBack}
                        openOther={this.props.openOther}
                        handleOpenFront={this.props.handleOpenFront}
                        handleOpenBack={this.props.handleOpenBack}
                        handleOpenOther={this.props.handleOpenOther}
                        hover={this.props.hover}
                    />
                    <Projects />
                </ScrollAnimation>
            </div>
        );
    }
}

export default Container;