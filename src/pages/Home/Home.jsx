import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Home.css';

function Home() {
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const aboutSections = useRef([]);

  useEffect(() => {
    gsap.from(heroTitleRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out', 
    });

    gsap.from(heroSubtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      delay: 0.3, 
      ease: 'power3.out',
    });

    // Typing effect for the subtitle
    const texts = [
      "I like programming (obviously). ",
      "I'm a Calisthenics enthusiast. ",
      "I play chess too. ",
      "Are you legos? ",
      "Because I'd never lego of you. ",
      "I'm gonna be honest with you that was terrible. ",
      "You really like reading don't you? ",
      "Let me repeat everything. "
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 80;
    const deletingSpeed = 50;
    const pauseTime = 1000;

    function typeText() {
      const currentText = texts[textIndex];

      if (!isDeleting && charIndex < currentText.length) {
        heroSubtitleRef.current.textContent = currentText.substring(0, charIndex++);
        setTimeout(typeText, typingSpeed);
      } else if (isDeleting && charIndex > 0) {
        heroSubtitleRef.current.textContent = currentText.substring(0, charIndex--);
        setTimeout(typeText, deletingSpeed);
      } else if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, pauseTime);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500);
      }
    }
    typeText();

    // IntersectionObserver for fading in about sections
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);

    aboutSections.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      aboutSections.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1 ref={heroTitleRef} className="hero-title">Hi, I'm Ethan</h1>
          <p ref={heroSubtitleRef} className="hero-subtitle typing-animation"></p>
        </div>
        <div className="down-arrow"></div>
      </section>

      <section className="about-section" id="about">
        <div 
          className="about-content fade-in" 
          ref={(el) => (aboutSections.current[0] = el)}
        >
          <h2>Wait.. Who even are you?</h2>
          <p>
            I’m Ethan, a regular guy from Jakarta, Indonesia. I love learning
            new things and exploring things out of my area. I try to learn as
            many things as possible but still try to master one skill which is
            web development.
          </p>
        </div>

        <div 
          className="about-content fade-in"
          ref={(el) => (aboutSections.current[1] = el)}
        >
          <h2>What do you do?</h2>
          <p>
            I’m a web developer who builds interactive, dynamic websites. I try
            my best in producing clean + efficient code and always strive for the
            best user experience. Beyond coding, I’m deeply invested in
            calisthenics, where I enjoy pushing my physical limits, and I
            challenge my mind with competitive chess.
          </p>
        </div>

        <div 
          className="about-content fade-in"
          ref={(el) => (aboutSections.current[2] = el)}
        >
          <h2>My work ethic</h2>
          <p>
            Ever since I was a kid, when I can't compensate for my talent, I
            always use hard work to catch up with my peers. I always believe
            that hard work and experience outworks talent. I always try my best
            and find the most effective solutions to my problems.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;