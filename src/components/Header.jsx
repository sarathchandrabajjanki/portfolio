import React from 'react'
import '../styles/Header.css'

function Header(){
  return (
    <header className="header">
      <a href="#top" className="logo">Sarath <span>Chandra</span></a>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header