import React from 'react'
import '../styles/Projects.css'

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
    name: 'Food App',
    link: 'https://food-app-zeta-plum.vercel.app/',
    description: 'Modern food ordering app with dynamic menu and cart system.'
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
