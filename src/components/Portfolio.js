import React, { Component } from 'react';
import '../styles/portfolio.css'

import Navbar from './sub-components/Navbar';
import Header from './sub-components/Header'
import Container from './sub-components/Container';
import Footer from './sub-components/Footer';

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <Navbar />
                <Header />
                <Container
                    openFront={this.props.openFront}
                    openBack={this.props.openBack}
                    openOther={this.props.openOther}
                    handleOpenFront={this.props.handleOpenFront}
                    handleOpenBack={this.props.handleOpenBack}
                    handleOpenOther={this.props.handleOpenOther}
                />
                <Footer email={this.props.email} openPopup={this.props.openPopup} />
            </div>
        );
    }
}

export default Portfolio;
