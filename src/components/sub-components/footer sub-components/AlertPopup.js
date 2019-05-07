import React, { Component } from 'react';
import { Animated } from "react-animated-css";

class AlertPopup extends Component {
    render() {
        return (
            <Animated className="alert" animationIn="bounceInDown" animationOut="bounceOutUp" isVisible={this.props.alertPopup} >
                <div className="alert-title">
                    <h1>copied!</h1>
                    <i class="fas fa-thumbs-up"></i>
                </div>
                <p>waiting for your email! ♥</p>
            </Animated>
        );
    }
}

export default AlertPopup;
