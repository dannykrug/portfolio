import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class LandingPage extends Component {
  render() {
    return(
      <div>
        Danny Krug Home Page
        <div>
          <Link to="/about">About</Link>
        </div>
      </div>
    )
  }
}
