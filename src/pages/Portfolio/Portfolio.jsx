import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import projectTwitter from '../../assets/images/project-twitter.png';
import projectKeyboardChecker from '../../assets/images/project-keyboardchecker.png';
import projectStopwatch from '../../assets/images/project-stopwatch.png';

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  const portfolioRef = useRef(null);
  const cardsRef = useRef([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    gsap.fromTo(
      portfolioRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, scale: 0.9, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: 'top 70%',
        },
      }
    );
  }, []);

  const projects = [
    {
      img: projectTwitter,
      title: "X's Replica",
      description: "A replica of X (Twitter) using HTML, CSS, and JS, mimicking X's UI.",
      link: "https://github.com/newelhan/x-frontend",
    },
    {
      img: projectKeyboardChecker,
      title: 'Keyboard Checker',
      description: 'Tool to check keyboard functionality, built for testing a broken keyboard.',
      link: 'https://github.com/newelhan/keyboard-checker',
    },
    {
      img: projectStopwatch,
      title: 'Stopwatch',
      description: 'A stopwatch app, my first project built using HTML, CSS, and JS.',
      link: 'https://github.com/newelhan/stopwatch',
    },
  ];

  const handleFooterClick = () => {
    navigate('/contact');
  };

  return (
    <section className="portfolio-section" ref={portfolioRef}>
      <h1 className="section-title">My Works</h1>
  
      <div className="portfolio-desc" onClick={handleFooterClick}>
        Way more to fit here... Let's make a project together!
      </div>
  
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="project-card-inner">
              <img
                src={project.img}
                alt={`${project.title} Preview`}
                className="project-image"
              />
              <div className="project-info">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
  
}

export default Portfolio;
