import React, { Component } from 'react';

let htmlLogo = require("../../../../images/front/html-circle.png")
let cssLogo = require("../../../../images/front/css-circle.png")
let jsLogo = require("../../../../images/front/javascript.png")
let reactLogo = require('../../../../images/front/react.png')
let mobxLogo = require('../../../../images/front/mobx.png')
let jqueryLogo = require('../../../../images/front/jquery.png')
let bootsrapLogo = require("../../../../images/front/bootsrap.png")

class Front extends Component {
    render() {
        return (
            <div className="skills-details">
                <img className="skill-image" src={htmlLogo} alt="HTML5" title="HTML5" />
                <img className="skill-image" src={cssLogo} alt="CSS3" title="CSS3" />
                <img className="skill-image" src={jsLogo} alt="Javascript" title="Javascript" />
                <img className="skill-image" src={reactLogo} alt="React" title="React" />
                <img className="skill-image mobx-logo" src={mobxLogo} alt="MobX" title="MobX" />
                <img className="skill-image jquery-logo" src={jqueryLogo} alt="jQuery" title="jQuery" />
                <img className="skill-image bootsrap-logo" src={bootsrapLogo} alt="Bootsrap" title="Bootstrap" />

            </div>
        );
    }
}

export default Front;
