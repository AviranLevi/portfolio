import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Skills extends Component {
    render() {
        return (
            <div className="skills container-child">
                <ScrollAnimation className="skills-box" animateIn="fadeIn" initiallyVisible={true}>
                    <div className="skills-title">
                        <i className="fas fa-tools fa-4x"></i>
                        <h1>Skills</h1>
                    </div>

                    <div className="skills-list">
                        <div className="skill">
                            <h1>Fron-End</h1>
                        </div>
                        <div className="skill">
                            <h1>Back-End</h1>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        );
    }
}

export default Skills;
