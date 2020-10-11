import React from 'react';
import './About.css'

export default class About extends React.Component {
  render() {
    return(
      <section className='about-me'>
        <div className='info'>
          <h1 className='about-header'>Introduction</h1>
          <p className='about-paragraph'>
            Hello! My name is George Brown and welcome to my personal perfolio website! I am a Full Stack Web Developer who's specialized with building intuitive, interactive and fully responsive web applications. I enjoy everything revolving around the world programming, and strive to stay above all of the latest technologies and languages as this skill constantly evolves.
            <span className='p-break' />    
            I also enjoy working alongside other passionate developers and the process of bouncing off of each other's ideas, and eventually bringing that idea to life.
            <span className='p-break'/>
            Aside from working with code, I'm usually listening to and/or making music, as I'm a musician as well, which ties itself into programming. Naturally being a creative, this allows me to put similar concepts to use when coming up with a new idea for a project.
          </p>
        </div>
      </section>
    )
  }
}
      