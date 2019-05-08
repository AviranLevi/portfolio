import React, { Component } from 'react';

let photoshopLogo = require("../../../../images/other/photoshop.png")
let vsLogo = require("../../../../images/other/visual-studio.png")
let gitLogo = require("../../../../images/other/git.png")
let aeLogo = require("../../../../images/other/after-effects.png")
let herokuLogo = require("../../../../images/other/heroku.png")
let githubLogo = require("../../../../images/other/github.png")


class Other extends Component {
    render() {
        return (
            <div className="skills-details">
                <img className="skill-image" src={vsLogo} alt="Visual Studio" title="Visual Studio" />
                <img className="skill-image git-logo" src={gitLogo} alt="git" title="git" />
                <img className="skill-image photoshop-logo" src={photoshopLogo} alt="Photoshop" title="Photoshop" />
                <img className="skill-image ae-logo" src={aeLogo} alt="After Effects" title="After Effects" />
                <img className="skill-image heroku-logo" src={herokuLogo} alt="Heroku" title="Heroku" />
                <img className="skill-image github-logo" src={githubLogo} alt="Github" title="Github" />


            </div>
        );
    }
}

export default Other;
