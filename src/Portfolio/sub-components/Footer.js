import React, { Component } from 'react';
import '../../styles/footer.css';
import ScrollAnimation from 'react-animate-on-scroll';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <ScrollAnimation className="footer-layer" animateIn="fadeIn" animateOut="fadeOutRight" initiallyVisible={true}>
                    <h1 className="footer-title">find me on social media</h1>
                    <div className="social-media-links">
                        <a className="linked-in social-media-link" href="#">
                            <i class="fab fa-linkedin-in fa-2x"></i>
                        </a>

                        <a className="email social-media-link" href="#">
                            <i class="far fa-envelope fa-2x"></i>
                        </a>
                    </div>
                </ScrollAnimation>
            </div>
        );
    }
}

export default Footer;
