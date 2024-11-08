import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="social-icons">
                <img src="assets/images/icon-youtube.svg" alt="logoytb" />
                <img src="assets/images/icon-facebook.svg" alt="logoytb" />
                <img src="assets/images/icon-instagram.svg" alt="logoytb" />
            </div>
        </footer>
    );
};

export default Footer;
