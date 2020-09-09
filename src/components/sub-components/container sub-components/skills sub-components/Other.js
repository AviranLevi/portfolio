import React, { Component } from 'react';
import { otherSkills } from '../../../../consts/SkillsObj';

class Other extends Component {
  render() {
    return (
      <div className='skills-details'>
        {otherSkills.map((skill) => (
          <img className='skill-image' src={skill.logo} alt={skill.name} title={skill.name} />
        ))}
      </div>
    );
  }
}

export default Other;
