import React, {Component} from 'react'
import './LandingPage.css'

const menuitem = {
 listStyle: 'none',
 textDecoration: 'none',
 fontFamily: 'Roboto Slab',
 color: 'white',
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
          target="_blank"
          exact
          style={menuitem}
        >Blog</a>
        <a
          href='https://github.com/dannykrug'
          target="_blank"
          style={menuitem}
          >GitHub</a>
        <a
          href='https://twitter.com/dannykrug'
          target="_blank"
          style={menuitem}
          >Twitter</a>
      </div>

      </div>
    )
  }
}
