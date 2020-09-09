import React, { Component } from 'react';
import { backSkills } from '../../../../consts/SkillsObj';

class Back extends Component {
  render() {
    return (
      <div className='skills-details'>
        {backSkills.map((skill) => (
          <img className='skill-image' src={skill.logo} alt={skill.name} title={skill.name} />
        ))}
      </div>
    );
  }
}

export default Back;
