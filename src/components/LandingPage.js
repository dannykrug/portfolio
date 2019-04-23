import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './LandingPage.css'

const menuitem = {
 listStyle: 'none',
 textDecoration: 'none',
 fontFamily: 'Roboto Slab',
 color: 'white',
 fontSize: '24px',
 fontWeight: 'bold',
 padding: '0 30px 0 30px'
}

export default class LandingPage extends Component {
  render() {
    return(
      <div class='landing-wrapper'>
      <div class='bg-image-main'>

      <div class="container">
        <div class="secondary-btn">
        <div class="title-text">
        <p> Danny Krug </p>
        <p> Full Stack Developer </p>
        <NavLink
          to='/work'
          style={menuitem}
          >Work</NavLink>
          <NavLink
            to='/projects'
            style={menuitem}
            >Personal Projects</NavLink>
        </div>
        </div>
      </div>
      </div>
      </div>
    )
  }
}
