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
                <Container />
                <Footer />
            </div>
        );
    }
}

export default Portfolio;
