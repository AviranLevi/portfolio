import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Front from './skills sub-components/Front';
import Back from './skills sub-components/Back';
import Other from './skills sub-components/Other';

class Skills extends Component {
    openFront = () => this.props.handleOpenFront()
    openBack = () => this.props.handleOpenBack()
    openOther = () => this.props.handleOpenOther()

    render() {
        return (
            <div className="skills container-child">
                <ScrollAnimation className="skills-box" animateIn="fadeIn" initiallyVisible={true}>
                    <div className="skills-title">
                        <i className="fas fa-tools fa-4x"></i>
                        <h1>Skills</h1>
                    </div>

                    <div className="skills-list">
                        <div onClick={this.openFront} className="skill">
                            <h1>Fron-End</h1>
                            {this.props.openFront ? <Front /> : null}
                        </div>

                        <div onClick={this.openBack} className="skill">
                            <h1>Back-End</h1>
                            {this.props.openBack ? <Back /> : null}
                        </div>

                        <div onClick={this.openOther} className="skill">
                            <h1>Other</h1>
                            {this.props.openOther ? <Other /> : null}
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        );
    }
}

export default Skills;
