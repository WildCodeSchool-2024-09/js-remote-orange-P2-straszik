import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <div className="main-container">
            {/* Other content such as images/video */}

            <footer className="footer">
                <div className="social-icons">
                    <img src="assets/images/icon-youtube.svg" alt="YouTube" />
                    <img src="assets/images/icon-facebook.svg" alt="Facebook" />
                    <img src="assets/images/icon-instagram.svg" alt="Instagram" />
                </div>
                <p>© 2024 Wild Code School</p>
            </footer>
        </div>
    );
};

export default Footer;
