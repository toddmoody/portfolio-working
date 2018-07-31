import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";

import MinHeader from '../components/MinHeader';
import WorkCTA from '../components/WorkCTA';
import Footer from '../components/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FaArrowDown from '@fortawesome/fontawesome-free-solid/faArrowDown';

import GITThumb from '../assets/git-thumb.png';
import NPMThumb from '../assets/npm-thumb.png';
import PSDThumb from '../assets/psd-thumb.png';
import SketchThumb from '../assets/sketch-thumb.png';
import CSSThumb from '../assets/css-thumb.png';
import ReactThumb from '../assets/react-thumb.png';
import JSThumb from '../assets/js-thumb.png';
import WPThumb from '../assets/webpack-thumb.png';
import Feature from '../assets/mcl-desktop.jpg';
import MobFeature from '../assets/mcl-mobile.png'

import '../css/Projects.scss';

class Matamata extends Component {
    render () {
        return (
            <section id="project">
                <MinHeader />
                    <div className="work-header wrapper">
                        <div className="work-year">
                            <h1>Year</h1>
                            <p>2018</p>
                        </div>
                        <div className="work-deliv">
                            <h1>Deliverables</h1>
                            <ul>
                                <li>UI/UX Design</li>
                                <li>Development</li>
                                <li>Deployment</li>
                                <li>SEO & Ad-Words</li>
                            </ul>
                        </div>
                        <div className="work-title">
                            <h1>Matamata Country Lodge - Bootstrap v4 website & SEO.</h1>
                            <p>Matamata Country Lodge needed a website to help them promote their retirement village. In particular, the client wanted to showcase their award winning landscaping and gardens and the fact they are an NZ family owned and operated business - a relatively unique selling point in the industry!</p>
                            <p>I really wanted to focus on usability and ease of navigation with this build and essentially cater to a very broad range of users and age groups (elderly residents but also their families that often research on their behalf). I decided to utilise Bootstrap v4 in this case largely due to how robust it is responsively and I also wanted to utilise a couple of their pre-built components incl. the navigation and alert bar.</p>
                            <div className="btn-wrapper">
                                <Link className="project-btn" to="/work-matamata/#tech">More on my technical process</Link>
                            </div>
                        </div>  
                    </div>
                    <div className="image-block">
                        <img src={Feature}></img>
                    </div>
                    <div className="mob-feature wrapper">
                        <div className="mob-left">
                            <h2>Equally as powerful on the small screen</h2>
                            <p>Retirement villages are no exception when it comes to needing an excellent mobile experience. A lot of care was put into the smaller screen views of this web application, including highly visible typography, imagery and large call to action links. SEO was also an important consideration in mobile optimisation as one of the main objectives is to improve on the search rankings of the previous website.</p>
                        </div>
                        <div className="mob-img">
                            <img src={MobFeature}></img>
                        </div>
                    </div>
          
                    <div id="tech" className="tech-block wrapper">
                        <div className="content-wrapper">
                            <h2>Technical info & tooling</h2>
                                <p>As mentioned above, we really wanted to improve the overall usability and it was known that many of the child pages on the previous site were visited very infrequently (due to a fairly clunky navigation and lack of links outside of the main navigation bar).</p>
                                <p>It had been a while since I'd used the Bootstrap framework in detail so it was a good opportunity to dive into v4 and I was excited to adopt some of the key components, including:</p>
                                    <ol>
                                        <li>The alert component - I've recently seen these collapsable alert bars quite a lot and they formed a key part of the overall page design and really served two key purposes; allowing us to carry the accent color throughout the site, and; allowing us to hero unique page-level messages i.e. "new 2-bed chalets now available".</li>
                                        <li>The navbar - I think the bootstrap nav is one of the best out there and after coding a few from scratch recently I certainly value the ability to get up and running quickly especially on projects with limited budget such as this one. I guess the drawback can be the end result looking very "Bootstrap" but in this case I was really happy with the level of customisation and unique on-brand, and highly user friendly end result.</li>
                                    </ol>
                                <p>The other main objective of this website was to hero the landscaping and gardens and our best assets to achieve this was a library of professional images. I used CSS grid to create a mosaic style gallery which I think worked really well in this case - in particular because I wanted to avoid lightboxes and display large format pics effectively.</p>
                        </div>
                        <div className="tooling">
                            <img src={GITThumb} alt="Git"></img>
                            <img src={NPMThumb} alt="NPM"></img>
                            <img src={PSDThumb} alt="Photoshop"></img>
                            <img src={SketchThumb} alt="Sketch"></img>
                            <img src={CSSThumb} alt="CSS"></img>  
                         
                        </div>
                    </div>
                    <div id="links" className="work-links wrapper">
                    <h2>Production app & GitHub repo</h2>
                        <ul>
                            <li><a className="body-link" href="https://matamatacountrylodge.co.nz/" target="blank">Visit website</a></li>
                            <li><a className="body-link" href="https://github.com/toddmoody/" target="blank">GitHub repo</a></li>
                        </ul>
                    </div>
                <WorkCTA />
                <Footer />
            </section>
        );
    }
}

export default Matamata;
