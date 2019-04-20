import React, {Component} from 'react'
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
          href='https://medium.com/@dannykrug'
          exact
          style={menuitem}

        >Blog</a>
        <a
          href='https://github.com/dannykrug'
          style={menuitem}
          >GitHub</a>
        <a
          href='https://twitter.com/dannykrug'
          style={menuitem}
          >Twitter</a>
      </div>

      </div>
    )
  }
}
