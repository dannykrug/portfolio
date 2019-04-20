import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './LandingPage.css'


export default class LandingPage extends Component {
  render() {
    return(
      <div class='landing-wrapper'>
      <div class='bg-image-main'>

      <div class="container">
        <div class="secondary-btn">
        <p> Danny Krug </p>
        <p> Full Stack Developer </p>
        </div>
      </div>

        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      </div>
    )
  }
}
