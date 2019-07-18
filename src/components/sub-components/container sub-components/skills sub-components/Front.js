import React, { Component } from "react";
import skillsObj from "../../../../consts/SkillsObj";

class Front extends Component {
  render() {
    return (
      <div className="skills-details">
        <img
          className="skill-image"
          src={skillsObj.htmlLogo}
          alt="HTML5"
          title="HTML5"
        />
        <img
          className="skill-image"
          src={skillsObj.cssLogo}
          alt="CSS3"
          title="CSS3"
        />
        <img
          className="skill-image"
          src={skillsObj.jsLogo}
          alt="Javascript"
          title="Javascript"
        />
        <img
          className="skill-image ts-logo"
          src={skillsObj.tsLogo}
          alt="TypeScript"
          title="TypeScript"
        />

        <img
          className="skill-image"
          src={skillsObj.reactLogo}
          alt="React"
          title="React"
        />
        <img
          className="skill-image mobx-logo"
          src={skillsObj.mobxLogo}
          alt="MobX"
          title="MobX"
        />
        <img
          className="skill-image bootsrap-logo"
          src={skillsObj.angularLogo}
          alt="Angular8"
          title="Angular8"
        />
        <img
          className="skill-image bootsrap-logo"
          src={skillsObj.rxjsLogo}
          alt="RxJS"
          title="RxJS"
        />
        <img
          className="skill-image jquery-logo"
          src={skillsObj.jqueryLogo}
          alt="jQuery"
          title="jQuery"
        />
        <img
          className="skill-image bootsrap-logo"
          src={skillsObj.bootsrapLogo}
          alt="Bootsrap"
          title="Bootstrap"
        />
      </div>
    );
  }
}

export default Front;
