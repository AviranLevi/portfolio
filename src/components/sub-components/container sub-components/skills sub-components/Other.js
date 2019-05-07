import React, { Component } from 'react';

let photoshopLogo = require("../../../../images/other/photoshop.png")
let vsLogo = require("../../../../images/other/visual-studio.png")
let gitLogo = require("../../../../images/other/git.png")

class Other extends Component {
    render() {
        return (
            <div className="skills-details">
                <img className="skill-image" src={vsLogo} alt="Visual Studio" title="Visual Studio" />
                <img className="skill-image git-logo" src={gitLogo} alt="git" title="git" />
                <img className="skill-image photoshop-logo" src={photoshopLogo} alt="Photoshop" title="Photoshop" />
            </div>
        );
    }
}

export default Other;
