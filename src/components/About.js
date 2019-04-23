import React, { Component } from 'react';
import './LandingPage.css'


export default class About extends Component {
  render() {
  return (
    <div class='landing-wrapper'>
    <div class='bg-image-about'>
    <div class="about-wrapper">
    <div class="about-box">
      <div>
      <h1 class="project-text"> About </h1>
        <img class="about-image" src="/danstation.jpg" alt="Danny Krug" />
        <p class="project-text"> I'm a full stack web developer with a passion for solving everyday problems with intuitive solutions. With experience in Ruby on Rails, JavaScript, and React and a background in photography and music, I discovered web development through my own desire for simpler solutions to problems in my previous fields of work. I bring strong skills in team-building, design and project management that help companies improve their overall user experience. </p>
      </div>
    </div>
    </div>
    </div>
    </div>
  )}
}
