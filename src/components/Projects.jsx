import React from 'react'
import '../styles/projects.css'

const projects = [
  {
    name: 'Weather Dashboard Web App',
    link: 'https://weather-project-alpha-eight.vercel.app/',
    description: 'Real-time weather using OpenWeatherMap API with React.'
  },
  {
    name: 'ReactLearn',
    link: 'https://project-programiz.vercel.app/',
    description: 'Solo learning platform with API integration and auth.'
  },
  {
    name: 'E-Commerce App',
    link: 'https://e-commerce-app-eta-beryl.vercel.app/',
    description: 'Responsive e-commerce UI with product listings and routing.'
  },
  {
    name: 'AirMax Product Card UI',
    link: 'https://funny-gumdrop-f66a83.netlify.app/',
    description: 'Interactive product card with hover effects and options.'
  }
]

function Projects(){
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="grid projects-grid">
        {projects.map((p, i) => (
          <article key={i} className="project card">
            <h3>{p.name}</h3>
            <p className="subtitle">{p.description}</p>
            <a className="btn" href={p.link} target="_blank" rel="noreferrer">View Project</a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects