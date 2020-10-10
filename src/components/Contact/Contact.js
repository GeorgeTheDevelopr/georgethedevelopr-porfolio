import React from 'react';
import './Contact.css';

export default function Contact() {
  return(
    <section className="contact">
      <h1 className='contact_header'>Leave An Email</h1>
      <form action="https://formspree.io/f/meqpebvq" method="POST">
        <label for="full_name">Name</label>
        <input type='text' id='full_name' />

        <label for='email_add'>Email</label>
        <input type='text' name="_replyto" id='email_add' />

        <label for='message'>Message</label>
        <textarea name='message' id='message' placeholder='Enter Message Here'/>

        <input type='submit' value='Submit'/>
      </form>

      <div className='social_container'>
        <div className='github'>
          <i className="fab fa-github"></i>
          <a href='http://www.github.com/georgethedevelopr' target="_blank" rel='noopener noreferrer' id='github_a'>GitHub</a>
        </div>

        <div className='linkedin'>
          <i class="fab fa-linkedin"></i>
          <a href='https://www.linkedin.com/in/georgebrownsumthn/' target="_blank" rel='noopener noreferrer' id='linkedin_a'>LinkedIn</a>
        </div>
      </div>
    </section>
  )
}