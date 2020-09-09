import React, { Component } from 'react';
import { frontSkills } from '../../../../consts/SkillsObj';

class Front extends Component {
  render() {
    return (
      <div className='skills-details'>
        {frontSkills.map((skill) => (
          <img className='skill-image' src={skill.logo} alt={skill.name} title={skill.name} />
        ))}
      </div>
    );
  }
}

export default Front;
