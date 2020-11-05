import React from 'react';
import './Projects.css';
import musicapp from './screenshots/quizapp.jpg'
import transactionary from './screenshots/TA.png'
import buddyup from './screenshots/BU.png'

export default class Projects extends React.Component{
  render() { 
    return (
      <div className='projects-container'>
        <h1 className='project_header'>Projects</h1>
        <section className='projects'>
          <div className='project project_1'>
            <h3 className='project_title'>Music Quiz App</h3>
            <img src={musicapp} className="p1_img" alt="Quiz App Screenshot"></img>
            <p className='project_desc'>Simple single page web app that generates five music related questions, based on chosen difficulty (easy, medium or hard). Inteded for those who wants to challenge their music knowledge across all genres. Built simply as a fun project from a music lover's perspective.</p>
            <p className='tech_stack'>Stack: HTML5, CSS, JavaScript and JQuery.</p>
            <div className='projectLinks_container'>
              <p><a href="https://github.com/thinkful-ei-panda/Quiz-App-George-Rebecca" className="projectLinks" target="_blank" rel='noopener noreferrer'>Repo</a></p>
              <p><a href="https://thinkful-ei-panda.github.io/Quiz-App-George-Rebecca/" className="projectLinks" target="_blank" rel='noopener noreferrer'>Demo</a></p>
            </div>
          </div>

          <div className='project project_2'>
            <h3 className='project_title'>TransActionary</h3>
            <img src={transactionary} className="p2_img" alt="TransActionary Screenshot"></img>
            <p className='project_desc'>Full Stack Web Application that allows users to create "transaction lists". This app takes a list of items (transaction) and assign them to vendor (online or in person). Intended for those who quickly wants a way to save and view their transaction. Built with my mom in mind, as she still collects paper receipts, and over time, they tend to fade out.</p>
            <p className='tech_stack'>Stack: HTML5, CSS, JavaScript, PostgreSQL, Express.js, React.js, Node.js.</p>
            <div className='projectLinks_container'>
              <p><a href="https://github.com/GeorgeTheDevelopr/TransActionary-Client" className="projectLinks" target="_blank" rel='noopener noreferrer'>Repo</a></p>
              <p><a href="https://transactionary-client.vercel.app/" className="projectLinks" target="_blank" rel='noopener noreferrer'>Demo</a></p>
            </div>
          </div>

          <div className='project project_3'>
            <h3 className='project_title'>BuddyUp</h3>
            <img src={buddyup} className="p2_img" alt="BuddyUp Screenshot"></img>
            <p className='project_desc'>Full Stack Web Application that allows you to organize, join and create activities in your area. Intended for those who want to safely plan activies where anyone can tag along (with approval). Built as a group project with a team of 4. We all felt this would be a great idea for when the government slowly began reopening the majority of public spaces.</p>
            <p className='tech_stack'>Stack: HTML5, CSS, JavaScript, PostgreSQL, Express.js, React.js, Node.js.</p>
            <div className='projectLinks_container'>
              <p><a href="https://github.com/thinkful-ei-panda/buddyup-client/" className="projectLinks" target="_blank" rel='noopener noreferrer'>Repo</a></p>
              <p><a href="https://buddyup-client.vercel.app/" className="projectLinks" target="_blank" rel='noopener noreferrer'>Demo</a></p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}