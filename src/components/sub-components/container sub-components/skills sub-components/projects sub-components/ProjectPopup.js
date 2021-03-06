import React, { Component } from 'react';
import { skillsObj } from '../../../../../consts/SkillsObj';
class ProjectPopup extends Component {
  render() {
    let project = this.props.project;
    return (
      <div className='project-popup'>
        <div className='project-popup-header'>
          <div className='project-popup-title'>
            <h1 className='project-popup-name'>{project.name}</h1>
            <a className='github-link' href={project.github} rel='noopener noreferrer' target='_blank'>
              <img alt={project.name} src={skillsObj.githubLogo} />
            </a>
          </div>
          <button className='project-popup-close-btn project-popup-center'>X</button>
        </div>
        <div className='project-popup-details'>{project.desc}</div>

        <div className='project-popup-skills-box '>
          <h1 className='project-popup-skills-box-title'>Technologies:</h1>
          <div className='project-popup-skills project-popup-center'>
            {project.usedTech.map((skill) => (
              <img key={Math.random()} src={skill} alt={project.name} className='project-popup-skill skill-image' />
            ))}
          </div>
        </div>
        <div className='project-popup-link-box project-popup-center '>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href={project.projectLink}
            className='project-popup-link-to-project'
          >
            {`Click here to check it by yourself 😊`}
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectPopup;
