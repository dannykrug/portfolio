import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './LandingPage.css'


export default class LandingPage extends Component {
  render() {
    return(
      <div class='landing-wrapper'>
      <div class='bg-image'>
      <div class='container'>
        <h1> Danny Krug </h1>
        <h2> Full Stack Developer </h2>

        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      </div>
      </div>
    )
  }
}
