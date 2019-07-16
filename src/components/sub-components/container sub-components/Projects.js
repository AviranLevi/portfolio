import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

class Projects extends Component {
  handleOpenProjectPopup = e => {
    this.props.handleOpenProjectPopup(e);
  };

  render() {
    return (
      <div className="projects container-child hover-on">
        <ScrollAnimation
          className="projects-box"
          animateIn="fadeIn"
          initiallyVisible={true}
        >
          <div className="projects-title">
            <i className="fas fa-code fa-4x" />
            <h1>Projects</h1>
          </div>

          <div className="projects-list">
            {this.props.projects.map(project => (
              <div
                className="project"
                key={project.name}
                name={project.name}
                rel="noopener noreferrer"
                target="_blank"
                onClick={this.handleOpenProjectPopup}
              >
                {project.name}
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Projects;
