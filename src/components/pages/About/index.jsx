/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import './styles.scss';

function About() {
  const [showContact, setShowContact] = useState(false);

  const handleScrollChange = () => {
    if (window.scrollY === 0) {
      setShowContact(true);
    } else {
      setShowContact(false);
    }
  };

  window.addEventListener('scroll', handleScrollChange);

  return (
    <section className="am-page background-about" id="about-page">
      <div className={`contact-stick-top ${showContact ? 'contact-stick-top--active' : ''}`}>
        alvarez.matias.n@gmail.com
      </div>
      <div className="am-page__content">
        <h1>Hi, my name&apos;s</h1>
        <h2>Matias Alvarez.</h2>
        <h3>A Full-Stack software developer based in Italy.</h3>
        <p>
          I like to architect simple and effective web applications from zero,
          currently focusing on giving life to my unfinished projects.
        </p>
      </div>
      <div className={`contact-stick-bot ${showContact ? 'contact-stick-bot--active' : ''}`}>
        test
      </div>
    </section>
  );
}

export default About;
