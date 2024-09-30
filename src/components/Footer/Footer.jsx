import React from "react";
import './Footer.css'

function Footer() {
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
      <footer>
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; 2024 newelhan. All Rights Reserved.</p>
          <div className="social-links">
            <a href="https://github.com/newelhan">GitHub</a>
            <a onClick={handleContactClick}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;