import React, { Component } from 'react';

import Slack from '../assets/slack-footer.png'
import GitHub from '../assets/github-footer.png'

import '../css/Footer.scss';

class Footer extends Component {
    render() {
      return (
        <section id="footer">
          <div className="footer-wrapper wrapper">
            <p>Website handmade by me &#9400; 2018</p>
            <div>
              <a href="https://todd-moody.slack.com/" target="blank"><img src={Slack} alt="slack"></img></a>
              <a href="https://github.com/toddmoody" target="blank"><img src={GitHub} alt="GitHub"></img></a>
            </div>
          </div>
        </section>
      );
    }
  }
  
  export default Footer;