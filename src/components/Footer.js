import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './LandingPage.css'

const menuitem = {
 listStyle: 'none',
 textDecoration: 'none',
 fontFamily: 'Abel',
 color: '#289bff',
 fontSize: '24px',
 fontWeight: 'bold',
 padding: '0 20px 0 20px'
}

export default class Footer extends Component {
  render(){
    return(
      <div class="footer">
      <div>
        <a
          href='/'
          exact
          style={menuitem}
          activeStyle={{
            color: 'black'
          }}
        ></a>
        <NavLink
          to='/work'
          style={menuitem}
          activeStyle={{
            color: 'black'
          }}
          >Work</NavLink>
        <NavLink
          to='/projects'
          style={menuitem}
          activeStyle={{
            color: 'black'
          }}
          >Personal Projects</NavLink>
          <NavLink
            to='/about'
            style={menuitem}
            activeStyle={{
              color: 'black'
            }}
            >About</NavLink>
            <NavLink
              to='/contact'
              style={menuitem}
              activeStyle={{
                color: 'black'
              }}
              >Contact</NavLink>
      </div>

      </div>
    )
  }
}
