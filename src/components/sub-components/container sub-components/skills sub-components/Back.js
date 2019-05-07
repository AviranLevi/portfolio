import React, { Component } from 'react';

let nodejsLogo = require("../../../../images/back/nodejs.png")
let expressLogo = require("../../../../images/back/express.png")
let mongodbLogo = require("../../../../images/back/mongodb.png")
let sqlLogo = require("../../../../images/back/sql.png")
let socketLogo = require("../../../../images/back/socket.png")

class Back extends Component {
    render() {
        return (
            <div className="skills-details">
                <img className="skill-image" src={nodejsLogo} alt="NodeJS" title="NodeJS" />
                <img className="skill-image socket-logo" src={socketLogo} alt="Socket.io" title="socket.io" />
                <img className="skill-image sql-logo" src={sqlLogo} alt="SQL" title="SQL" />
                <img className="skill-image express-logo" src={expressLogo} alt="express" title="Express" />
                <img className="skill-image mongodb-logo" src={mongodbLogo} alt="MongoDB" title="MongoDB" />

            </div>
        );
    }
}

export default Back;
