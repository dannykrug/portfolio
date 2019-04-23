import React, { Component } from 'react';
import './LandingPage.css'


export default class Projects extends Component {
  render() {
    return(
      <div class='appt-wrapper'>
      <div class='bg-image-projects'>
      <div class="wrapper">
      <div class="box">
        <div>
        <h1 class="project-text"> Hair Salon App </h1>
          <iframe class="project-video" title="hair-salon" width="560" height="315" src="https://www.youtube.com/embed/a04OpC7jMDM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p class="project-text"> This app (React with Rails backend) was designed out of a real world need for a better Hair Salon Management flow. My girlfriend, a hairstylist, uses a paid app that it just a glorified spreadsheet displaying appointments. I thought that there must be a way to make this look and feel better for the client as well as the stylist. </p>
        </div>
        <div>
        <h1 class="project-text"> Social Jukebox </h1>
          <iframe class="project-video" title="social-jukebox" width="560" height="315" src="https://www.youtube.com/embed/-XzTFVcUKiY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p class="project-text"> Social Jukebox (React with Rails backend) was a group project between myself and one of my Flatiron classmates. I thought it would be fun to have a tool that friends could add music to and queue up songs all while looking like a vintage jukebox out of something like Happy Days. It taps into the YouTube API to pull the audio as well as to source new audio for songs to be added to the jukebox. </p>
        </div>
        <div>
        <h1 class="project-text"> DayTripper </h1>
          <iframe class="project-video" title="daytripper" width="560" height="315" src="https://www.youtube.com/embed/cVM9jfAionQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p class="project-text"> DayTripper (Vanilla JS with Rails backend) is an idea that was born out of me being an Airbnb host. I'm constantly hosting guests from all over including guests that are from foreign countries where they might not have full access to cell phone service on their trip. The idea is that you are able to plan out your day in advance of leaving the house so you know where you're starting and where to go next, taking a lot of guess work out of your daily travel in a place like New York City. </p>
        </div>
        <div>
        <h1 class="project-text"> NeoPlants </h1>
          <p class="project-text"> NeoPlants (Ruby on Rails) was built as a fun game based on NeoPets and Tamagotchi. You take a quiz and are given a packet of seeds, then you raise the seeds into a plant through various phases of its life. Additional plants can be added later on in the game.</p>
        </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
