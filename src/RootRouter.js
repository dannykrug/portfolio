import React, { Component } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import ProfessionalWork from './components/ProfessionalWork';
import Contact from './components/Contact';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import LandingPage from '../src/components/LandingPage';

export default class RootRouter extends Component {
  render() {
    return(
      <div>
        <Router>
          <div>
          <NavBar />
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/work' component={ProfessionalWork} />
            <Route exact path='/contact' component={Contact} />
          </div>
        </Router>
      </div>
    )
  }
}
