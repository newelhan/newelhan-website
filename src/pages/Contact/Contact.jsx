import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Contact.css';

function Contact() {
  const formRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    // GSAP animation for form
    gsap.from(formRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    // GSAP animation for contact details
    gsap.from(detailsRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section className="contact-section">
      <h1 className="section-title">Let's Get in Touch!</h1>

      <div className="contact-container">
        <div className="contact-form-container" ref={formRef}>
          <form className="contact-form" action="mailto:ne.welhan@gmail.com" method="post" enctype="text/plain">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        <div className="contact-details" ref={detailsRef}>
          <h2>Contact Me!</h2>
          <p><strong>Email:</strong> ne.welhan@gmail.com</p>
          <p><strong>GitHub:</strong> <a href="https://github.com/newelhan" target="_blank" rel="noreferrer">github.com/newelhan</a></p>
          <p><strong>Discord:</strong> newelhan</p>

          <div className="referrals">
            <h3>Referrals</h3>
            <p>If you'd like to recommend a project or provide feedback, feel free to reach out to me via email or Discord!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
