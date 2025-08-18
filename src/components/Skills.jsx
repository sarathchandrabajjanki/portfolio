import React from "react";
import "../styles/Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiTypescript, SiRedux, SiNextdotjs, SiTailwindcss, SiVite, SiFirebase, SiGraphql } from "react-icons/si";

const skills = [
  { category: "Frontend", items: [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ]},
  { category: "Tools & Build", items: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "GraphQL", icon: <SiGraphql /> },
  ]},
  { category: "Design", items: [
    { name: "Figma", icon: <FaFigma /> },
  ]}
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>
      {skills.map((group, i) => (
        <div key={i} className="skills-group">
          <h3 className="skills-category">{group.category}</h3>
          <div className="skills-grid">
            {group.items.map((skill, j) => (
              <div key={j} className="skill-card">
                <span className="icon">{skill.icon}</span>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
