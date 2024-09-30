import React from "react";
import './Footer.css'

function Footer() {
  return (
      <footer>
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; 2024 newelhan. All Rights Reserved.</p>
          <div className="social-links">
            <a href="https://github.com/newelhan">GitHub</a>
            <a href="../contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;