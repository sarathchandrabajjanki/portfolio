import React from 'react'
import '../styles/hero.css'

function Hero(){
  return (
    <section id="top" className="hero">
      <div className="hero-inner card">
        <div className="hero-text">
          <h1>Frontend Developer</h1>
          <p>
            I build responsive, accessible, and fast web interfaces with React, modern CSS,
            and clean component architecture.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn" href="#contact">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero