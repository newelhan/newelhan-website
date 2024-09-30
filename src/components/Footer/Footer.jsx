import React from "react";
import { useNavigate } from 'react-router-dom';
import './Footer.css'

function Footer() {
  const navigate = useNavigate();
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