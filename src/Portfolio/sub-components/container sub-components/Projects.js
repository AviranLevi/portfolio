import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Projects extends Component {
    render() {
        return (
            <div className="projects container-child">
                <ScrollAnimation className="projects-box" animateIn="fadeIn" initiallyVisible={true}>
                    <div className="projects-title">
                        <i className="fas fa-code fa-4x"></i>
                        <h1>Projects</h1>
                    </div>

                    <div className="projects-list">
                        <div className="project">
                            <h1>Rick And Morty - Space Invaders</h1>
                        </div>
                        <div className="project">
                            <h1>CRM</h1>
                        </div>
                        <div className="project">
                            <h1>doggies</h1>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        );
    }
}

export default Projects;
