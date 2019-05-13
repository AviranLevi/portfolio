import React, { Component } from 'react';

class AlertPopup extends Component {
    render() {
        return (
            <div className="alert">
                <div className="alert-title">
                    <h1>copied!</h1>
                    <i className="fas fa-thumbs-up"></i>
                </div>
                <p>waiting for your email! ♥</p>
            </div>
        );
    }
}

export default AlertPopup;
