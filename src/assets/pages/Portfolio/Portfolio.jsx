import React from 'react';
import './Portfolio.css'
import projectTwitter from '../../images/project-twitter.png';
import projectKeyboardChecker from '../../images/project-keyboardchecker.png';
import projectStopwatch from '../../images/project-stopwatch.png';


function Portfolio() {
  return (
    <section className="portfolio-section">
    <h1 className="section-title">My Works</h1>

    <div className="portfolio-container">
        <div className="project-item">
            <div className="project-img-preview">
                <img id="project-img" src={projectTwitter} alt="X Replica Preview Image" className="project-image"/>
            </div>
            <div className="project-details">
                <h2 className="project-title">X's Replica</h2>
                <p className="project-description">I built a replica of X (Twitter) using HTML, CSS, and JS. I made it exactly the same as X's UI.</p>
                <a href="https://github.com/newelhan/x-frontend" className="project-link" target="_blank">View on GitHub</a>
            </div>
        </div>

        <div className="project-item">
            <div className="project-img-preview">
                <img id="project-img" src={projectKeyboardChecker} alt="Keyboard Checker Preview" className="project-image"/>
            </div>
            <div className="project-details">
                <h2 className="project-title">Keyboard Checker</h2>
                <p className="project-description">A keyboard checker, I made it to check my old broken keyboard on my laptop.</p>
                <a href="https://github.com/newelhan/keyboard-checker" className="project-link" target="_blank">View on GitHub</a>
            </div>
        </div>

        <div className="project-item">
            <div className="project-img-preview">
                <img id="project-img" src={projectStopwatch}  alt="Stopwatch Preview" className="project-image"/>
            </div>
            <div className="project-details">
                <h2 className="project-title">Stopwatch</h2>
                <p className="project-description">Stopwatch using HTML, CSS, and JS. My first ever project.</p>
                <a href="https://github.com/newelhan/stopwatch" className="project-link" target="_blank">View on GitHub</a>
            </div>
        </div>
    </div>
</section>
  )
}

export default Portfolio;