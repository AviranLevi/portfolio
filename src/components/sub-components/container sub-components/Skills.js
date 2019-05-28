import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { CSSTransition } from 'react-transition-group';

import Front from './skills sub-components/Front';
import Back from './skills sub-components/Back';
import Other from './skills sub-components/Other';

class Skills extends Component {
    openFront = () => this.props.handleOpenFront()
    openBack = () => this.props.handleOpenBack()
    openOther = () => this.props.handleOpenOther()

    render() {
        return (
            <div className={this.props.hover ? `skills container-child hover-on` : `skills container-child`}>
                <ScrollAnimation className="skills-box" animateIn="fadeIn" initiallyVisible={true}>
                    <div className="skills-title">
                        <i className="fas fa-tools fa-4x"></i>
                        <h1>Skills</h1>
                    </div>

                    <div className="skills-list">
                        <div onClick={this.openFront} className={this.props.hover ? `skill skill-hover` : `skill`}>
                            <h1>Front-End</h1>
                            <CSSTransition in={this.props.openFront} timeout={{ enter: 300, exit: 0 }} classNames="fade" unmountOnExit>
                                <Front />
                            </CSSTransition>
                        </div>

                        <div onClick={this.openBack} className={this.props.hover ? `skill skill-hover` : `skill`}>
                            <h1>Back-End</h1>
                            <CSSTransition in={this.props.openBack} timeout={{ enter: 300, exit: 0 }} classNames="fade" unmountOnExit>
                                <Back />
                            </CSSTransition>
                        </div>

                        <div onClick={this.openOther} className={this.props.hover ? `skill skill-hover` : `skill`}>
                            <h1>Other</h1>
                            <CSSTransition in={this.props.openOther} timeout={{ enter: 300, exit: 0 }} classNames="fade" unmountOnExit>

                                <Other />
                            </CSSTransition>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        );
    }
}

export default Skills;
