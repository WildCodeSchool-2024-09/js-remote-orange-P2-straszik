import type React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="main-container">
      {/* Other content such as images/video */}

      <footer className="footer">
        <div className="social-icons">
          <a
            href="https://www.youtube.com/channel/UCtBjt766LG9EDVKZx4Q4IHw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <img src="/assets/images/icon-youtube.svg" alt="YouTube" />
          </a>
          <a
            href="https://www.facebook.com/Pnlmusic/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img src="/assets/images/icon-facebook.svg" alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/pnlofficiel/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src="/assets/images/icon-instagram.svg" alt="Instagram" />
          </a>
          <a
            href="https://twitter.com/pnlofficiel"
            target="_blank"
            rel="noopener noreferrer"
            className="st-icon"
            aria-label="Twitter"
          >
            <img src="/assets/images/icon-twitter.svg" alt="Twitter" />
          </a>
        </div>
        <p className="footer-text">© 2024 Wild Code School</p>
      </footer>
    </div>
  );
};

export default Footer;
