import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Projects extends Component {
    render() {
        return (
            <div className="projects container-child hover-on">
                <ScrollAnimation className="projects-box" animateIn="fadeIn" initiallyVisible={true}>
                    <div className="projects-title">
                        <i className="fas fa-code fa-4x"></i>
                        <h1>Projects</h1>
                    </div>

                    <div className="projects-list">
                        <a className="project" href="https://rick-and-morty-space-game.herokuapp.com/" rel="noopener noreferrer" target="_blank">Rick And Morty - Space Invaders</a>
                        <a className="project" href="https://customer-relationship-manageme.herokuapp.com/" rel="noopener noreferrer" target="_blank">CRM</a>
                        <a className="project" href="https://doggies-app.herokuapp.com/" rel="noopener noreferrer" target="_blank">doggies</a>
                    </div>
                </ScrollAnimation>
            </div>
        );
    }
}

export default Projects;
