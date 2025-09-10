// src/components/Skills.jsx
import React from "react";
import "../styles/Skills.css";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt, FaFigma
} from "react-icons/fa";
import {
  SiTypescript, SiRedux, SiNextdotjs, SiTailwindcss, SiVite,
  SiFirebase, SiGraphql, SiBootstrap, SiChakraui, SiCypress, SiSass,
  SiSupabase, SiAxios, SiJenkins, SiNetlify, SiVercel
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript (ES6+)", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Context API", icon: <FaReact /> }, // reuse React icon
  
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Chakra UI", icon: <SiChakraui /> },
      { name: "SASS", icon: <SiSass /> },
      { name: "Responsive Web Design", icon: <FaCss3Alt /> }
    ]
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js", icon: <FaNode /> },
      { name: "RESTful APIs / AJAX", icon: <SiAxios /> },
      { name: "GraphQL", icon: <SiGraphql /> },
      { name: "Supabase", icon: <SiSupabase /> }
    ]
  },
  {
    category: "State Management",
    items: [
      { name: "Redux", icon: <SiRedux /> },
      { name: "Zustand", icon: <SiRedux /> }, // placeholder reuse
      { name: "Context API", icon: <FaReact /> }
    ]
  },
  {
    category: "Tools, Testing & Deployment",
    items: [
      { name: "Git / GitHub", icon: <FaGitAlt /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Jenkins / CI-CD", icon: <SiJenkins /> },
      { name: "Cypress", icon: <SiCypress /> },
      { name: "Postman (API Testing)", icon: <SiAxios /> },
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Vercel", icon: <SiVercel /> }
    ]
  },
  {
    category: "Design & UI",
    items: [
      { name: "Figma", icon: <FaFigma /> },
      { name: "User Interface Design", icon: <FaFigma /> }
    ]
  },
  {
    category: "Development Methodologies",
    items: [
      { name: "Responsive Web Design", icon: <FaCss3Alt /> },
      { name: "Agile Methodology", icon: <FaGitAlt /> }, // placeholder
      { name: "Jira / ClickUp", icon: <FaGitAlt /> }        // placeholder
    ]
  }
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
