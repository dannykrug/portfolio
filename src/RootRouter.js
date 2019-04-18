import React, { Component } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import ProfessionalWork from './components/ProfessionalWork';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import LandingPage from '../src/components/LandingPage';

export default class RootRouter extends Component {
  render() {
    return(
      <div>
        <Router>
          <div>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/work' component={ProfessionalWork} />
          </div>
        </Router>
      </div>
    )
  }
}
