import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FaArrow from '@fortawesome/fontawesome-free-solid/faLongArrowAltLeft';

import LogoB from '../assets/tm-logo-dark.png';

import '../css/Header.scss';

class MinHeader extends Component {
    render() {
      return (
        <section className="min-header">
            <header>
                    <Link className="back" to="/"><img className="logo" src={LogoB}></img></Link>
                    <nav>
                        <Link className="back" to="/">Back to projects<p>&#8672;</p></Link>
                    </nav>
            </header>
        </section>
      );
    }
  }
  
  export default MinHeader;