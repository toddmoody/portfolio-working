import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FaArrow from '@fortawesome/fontawesome-free-solid/faLongArrowAltLeft';

import LogoW from '../assets/tm-logo.png';

import '../css/Header.scss';

class MinHeader extends Component {
    render() {
      return (
        <section className="min-header">
            <header>
                <img className="logo" src={LogoW}></img>
                    <nav>
                        <Link className="back" to="/">Back to projects<FontAwesomeIcon className="back-arrow" size="lg" icon={FaArrow}/></Link>
                    </nav>
            </header>
        </section>
      );
    }
  }
  
  export default MinHeader;