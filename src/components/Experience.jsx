import React from "react";
import "../styles/Experience.css";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Godavari Wave Technologies Pvt. Ltd",
    period: "Jan 2025 – Present",
    details: [
      "Developed and deployed responsive web interfaces using HTML, CSS, JavaScript, and React.js, improving user experience and reducing page load time by 30%.",
      "Used Git and GitHub for version control and streamlined development through CI/CD pipelines using Netlify and Vercel."
    ]
  },
  {
    title: "Personal Secretary",
    company: "RX Pillkraft Pvt. Ltd",
    period: "Mar 2024 – Dec 2024",
    details: [
      "Supported the Managing Director of Megson Diagnostics, Z Mall, and others.",
      "Scheduled meetings, coordinated travel, and managed daily office operations."
    ]
  },
  {
    title: "Area Manager",
    company: "AAIMS Protections Pvt. Ltd",
    period: "Jul 2021 – Dec 2023",
    details: [
      "Managed teams and ensured operational efficiency across locations.",
      "Prepared reports and implemented performance improvements."
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              <h3>{exp.title}</h3>
              <span className="period">{exp.period}</span>
            </div>
            <p className="company">{exp.company}</p>
            <ul>
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
