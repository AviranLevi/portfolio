import React, { Component } from "react";
import skillsObj from "../../../../consts/SkillsObj";

class Other extends Component {
  render() {
    return (
      <div className="skills-details">
        <img
          className="skill-image"
          src={skillsObj.vsLogo}
          alt="Visual Studio"
          title="Visual Studio"
        />
        <img
          className="skill-image git-logo"
          src={skillsObj.gitLogo}
          alt="git"
          title="git"
        />
        <img
          className="skill-image photoshop-logo"
          src={skillsObj.photoshopLogo}
          alt="Photoshop"
          title="Photoshop"
        />
        <img
          className="skill-image ae-logo"
          src={skillsObj.aeLogo}
          alt="After Effects"
          title="After Effects"
        />
        <img
          className="skill-image heroku-logo"
          src={skillsObj.herokuLogo}
          alt="Heroku"
          title="Heroku"
        />
        <img
          className="skill-image github-logo"
          src={skillsObj.githubLogo}
          alt="Github"
          title="Github"
        />
      </div>
    );
  }
}

export default Other;
