import React from "react";
import "../styles/Hero.css";
import profileImg from "../assets/sarath.jpg"; // <-- place your image in src/assets folder

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-text">
          <h1>Hi, I’m <span className="highlight">Sarath Chandra</span></h1>
          <p>
            A passionate <strong>Frontend Developer</strong> with expertise in 
            modern web technologies. I love building elegant, user-friendly, and 
            responsive websites.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn primary">View My Work</a>
            <a href="#contact" className="btn secondary">Get in Touch</a>
          </div>
        </div>
        
        <div className="hero-image">
          <img src={profileImg} alt="Sarath Chandra" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
