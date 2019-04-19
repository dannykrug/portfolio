import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class LandingPage extends Component {
  render() {
    return(
      <div>
        <h1> Danny Krug </h1>
        <h2> Full Stack Developer </h2>
        
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    )
  }
}
