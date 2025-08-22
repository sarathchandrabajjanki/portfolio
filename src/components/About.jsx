import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            Hi, I’m <strong>Sarath Chandra</strong>, a passionate and detail-oriented 
            <strong> Frontend Developer</strong> who loves building modern, responsive, 
            and user-friendly web applications. With a strong foundation in 
            <strong> JavaScript, React, and UI design principles</strong>, I aim to craft 
            seamless digital experiences that bring ideas to life.
          </p>

          <p>
            I thrive on solving complex problems, collaborating in dynamic teams, 
            and staying updated with the latest technologies to deliver 
            <strong> elegant and performant solutions</strong>. My long-term goal 
            is to become a versatile full-stack engineer and contribute to 
            impactful products that scale globally.
          </p>

          <ul className="highlights">
            <li>💻 Skilled in React, Next.js, TypeScript, and modern CSS frameworks</li>
            <li>⚡ Experienced with performance optimization & responsive design</li>
            <li>🚀 Hands-on with Git, CI/CD, and cloud deployment (Vercel, Firebase)</li>
            <li>🎨 Strong eye for UI/UX and accessibility best practices</li>
            <li>🌱 Constant learner, exploring GraphQL & advanced testing</li>
          </ul>

          <a href="/resume-sarath.pdf" className="btn primary" download>
            Download Resume
          </a>
          
        </div>
      </div>
    </section>
  );
}

export default About;
