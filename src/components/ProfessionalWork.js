import React, { Component } from 'react';
import './LandingPage.css'


export default class ProfessionalWork extends Component {
  render() {
    return(
      <div class='landing-wrapper'>
      <div class='bg-image-work'>
      <div class="about-wrapper">
      <div class="about-box">
        <div>
        <h1 class="project-text"> Tire Agent </h1>
          <img class="about-image" src="/TA-work.jpg" alt="Tire Agent Search Features" />
          <p class="project-text"> Built out two new search features for Tire Agent. First, a search bar that sticks in the header on nearly every page of the site where customers can search by tire size or vehicle. Second, a mobile filter bar that helps users sort their search results, a feature that didn't exist on the mobile site prior. </p>
        </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
