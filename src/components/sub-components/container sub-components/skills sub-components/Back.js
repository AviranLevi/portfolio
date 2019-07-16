import React, { Component } from "react";
import skillsObj from "../../../../consts/SkillsObj";

class Back extends Component {
  render() {
    return (
      <div className="skills-details">
        <img
          className="skill-image"
          src={skillsObj.nodejsLogo}
          alt="NodeJS"
          title="NodeJS"
        />
        <img
          className="skill-image socket-logo"
          src={skillsObj.socketLogo}
          alt="Socket.io"
          title="Socket.io"
        />
        <img
          className="skill-image sql-logo"
          src={skillsObj.sqlLogo}
          alt="SQL"
          title="SQL"
        />
        <img
          className="skill-image express-logo"
          src={skillsObj.expressLogo}
          alt="express"
          title="express"
        />
        <img
          className="skill-image mongodb-logo"
          src={skillsObj.mongodbLogo}
          alt="mongoDB"
          title="mongoDB"
        />
      </div>
    );
  }
}

export default Back;
