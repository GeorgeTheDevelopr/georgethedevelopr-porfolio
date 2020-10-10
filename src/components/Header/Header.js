import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return(
    <header className='header-container'>
      <h1 className='header-header1'>George Brown</h1>
      <h3 className='header-header2'>Full Stack Web Developer</h3>
      <nav className='navbar'>
        <ul className='nav-list'>
          <li className='list-item'><Link to='/about'>About</Link></li>
          <li className='list-item'><Link to='/projects'>Projects</Link></li>
          <li className='list-item'><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}