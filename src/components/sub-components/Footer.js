import React, { Component } from 'react';

import ScrollAnimation from 'react-animate-on-scroll';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../../styles/footer.css';

class Footer extends Component {
    open = () => this.props.openPopup()

    render() {
        return (
            <div className="footer">
                <ScrollAnimation className="footer-layer" animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={true}>
                    <h1 className="footer-title">find me on social media</h1>
                    <div className="social-media-links">
                        <a className="linked-in social-media-link" rel="noopener noreferrer" href="https://www.linkedin.com/in/aviran-levi-29660911b/" target="_blank">
                            <i class="fab fa-linkedin-in fa-2x"></i>
                        </a>

                        <CopyToClipboard text={this.props.email}>
                            <a className="email social-media-link" rel="noopener noreferrer" href={`mailto:${this.props.email}`} onClick={this.open}>
                                <i class="far fa-envelope fa-2x"></i>
                            </a>
                        </CopyToClipboard>

                        <a className="github social-media-link" rel="noopener noreferrer" href="https://github.com/AviranLevi" target="_blank">
                            <i class="fab fa-github fa-2x"></i>
                        </a>

                    </div>
                </ScrollAnimation>

            </div>
        );
    }
}

export default Footer;
