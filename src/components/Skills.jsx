import React from 'react'
import '../styles/skills.css'

const skills = [
  'HTML5','CSS3','JavaScript (ES6+)','TypeScript',
  'React.js','Redux','Context API','Next.js',
  'Tailwind CSS','Bootstrap','SASS/SCSS','Material UI',
  'Responsive Web Design','Mobile-First Design','Flexbox','CSS Grid',
  'Git','GitHub','npm','Yarn',
  'REST API Integration','JSON','Fetch API','Axios',
  'Webpack','Vite','Babel','Browser DevTools',
  'DOM Manipulation','Event Handling','State Management','Cross-Browser Compatibility',
  'SEO Best Practices','Accessibility (WCAG, ARIA)','Performance Optimization',
  'Lazy Loading','Code Splitting','Lighthouse Audits',
  'Unit Testing (Jest, Mocha)','Component Testing (React Testing Library, Cypress)',
  'Continuous Deployment (CI/CD)','Netlify','Vercel','Firebase Hosting',
  'Figma','Adobe XD','Progressive Web Apps (PWAs)','GraphQL (Basics)'
]

function Skills(){
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <div key={i} className="skill chip">{s}</div>
        ))}
      </div>
    </section>
  )
}

export default Skills
