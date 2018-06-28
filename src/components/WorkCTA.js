import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FaArrow from '@fortawesome/fontawesome-free-solid/faLongArrowAltLeft';

import '../css/Projects.scss';

class WorkCTA extends Component {
    render() {
      return (
        
        <section id="cta">
          <Link to="/#work">
            <div className="cta-wrapper wrapper">
                <h2>Back to projects</h2><FontAwesomeIcon className="back-arrow" size="lg" icon={FaArrow}/>
            </div>
            </Link>
        </section>
        
      );
    }
  }
  
  export default WorkCTA;