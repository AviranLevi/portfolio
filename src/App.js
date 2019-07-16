import React, { Component } from "react";
import "./App.css";
import "animate.css/animate.min.css";

import Portfolio from "./components/Portfolio";
import AlertPopup from "./components/sub-components/footer sub-components/AlertPopup";
import skillsObj from "./consts/SkillsObj";
import ProjectPopup from "./components/sub-components/container sub-components/skills sub-components/projects sub-components/ProjectPopup";
import { CSSTransition } from "react-transition-group";

class App extends Component {
  constructor() {
    super();
    this.state = {
      openFront: false,
      openBack: false,
      openOther: false,
      openProjectPopup: false,
      hover: true,
      email: "aveloofficial@gmail.com",
      onSelectedProject: {},

      projects: [
        {
          name: "Rick & Morty - Space Invaders",
          desc:
            "Real time multiplayer / single player online game, based on the TV cartoon Rick and Morty.",
          usedTech: [
            skillsObj.htmlLogo,
            skillsObj.cssLogo,
            skillsObj.jsLogo,
            skillsObj.reactLogo,
            skillsObj.mobxLogo,
            skillsObj.nodejsLogo,
            skillsObj.expressLogo,
            skillsObj.socketLogo
          ],
          projectLink: "https://rick-and-morty-space-game.herokuapp.com/"
        },

        {
          name: "CRM",
          desc:
            "Client Management System with a database based table and a graphic analytics dashboard in a single page application",
          usedTech: [
            skillsObj.htmlLogo,
            skillsObj.cssLogo,
            skillsObj.jsLogo,
            skillsObj.reactLogo,
            skillsObj.nodejsLogo,
            skillsObj.expressLogo,
            skillsObj.mongodbLogo
          ],
          projectLink: "https://customer-relationship-manageme.herokuapp.com/"
        },

        {
          name: "doggies",
          desc: "Dogs parks based on social network.",
          usedTech: [
            skillsObj.htmlLogo,
            skillsObj.cssLogo,
            skillsObj.jsLogo,
            skillsObj.jqueryLogo,
            skillsObj.nodejsLogo,
            skillsObj.expressLogo,
            skillsObj.mongodbLogo
          ],
          projectLink: "https://doggies-app.herokuapp.com/"
        }
      ]
    };
  }

  componentDidMount() {
    document.body.addEventListener("click", this.handleBodyClick);
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.handleBodyClick);
  }

  handleBodyClick = () => {
    this.setState({
      alertPopup: false,
      openFront: false,
      openBack: false,
      openOther: false,
      openProjectPopup: false,
      hover: true
    });
  };

  handleOpenFront = () => this.setState({ openFront: true, hover: false });

  handleOpenBack = () => this.setState({ openBack: true, hover: false });

  handleOpenOther = () => this.setState({ openOther: true, hover: false });

  handleOpenProjectPopup = e => {
    let selectedProject = e.target.getAttribute("name");
    let findProject = this.state.projects.find(
      project => project.name === selectedProject
    );

    this.setState({ openProjectPopup: true, onSelectedProject: findProject });
  };

  handleCloseProjectPopup = () => this.setState({ openProjectPopup: false });

  render() {
    return (
      <div className="App">
        <Portfolio
          projects={this.state.projects}
          email={this.state.email}
          openFront={this.state.openFront}
          openBack={this.state.openBack}
          openOther={this.state.openOther}
          handleOpenFront={this.handleOpenFront}
          handleOpenBack={this.handleOpenBack}
          handleOpenOther={this.handleOpenOther}
          handleOpenProjectPopup={this.handleOpenProjectPopup}
          hover={this.state.hover}
        />

        {this.state.alertPopup ? (
          <AlertPopup alertPopup={this.state.alertPopup} />
        ) : null}

        <CSSTransition
          in={this.state.openProjectPopup}
          timeout={{ enter: 300, exit: 0 }}
          classNames="fade"
          unmountOnExit
        >
          <ProjectPopup project={this.state.onSelectedProject} />
        </CSSTransition>
      </div>
    );
  }
}

export default App;
