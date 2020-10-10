import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact'
import './App.css';

function App({location}) {
    return (
      <div className="App">
        <TransitionGroup className='transition-group'>
          <CSSTransition
            key={location.key} 
            timeout={{ enter: 300, exit: 300}}
            classNames={'fade'}
          >
            <section className='route-section'>
              <Switch location={location}>
                <Route exact path='/' component={Welcome} />
                <Route path='/about' component={About} />
                <Route path='/projects' component={Projects} />
                <Route path='/contact' component={Contact} />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }

  export default withRouter(App);