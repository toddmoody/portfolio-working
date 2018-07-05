import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";

import MinHeader from '../components/MinHeader';
import WorkCTA from '../components/WorkCTA';
import Footer from '../components/Footer';

import GITThumb from '../assets/git-thumb.png';
import NPMThumb from '../assets/npm-thumb.png';
import PSDThumb from '../assets/psd-thumb.png';
import SketchThumb from '../assets/sketch-thumb.png';
import CSSThumb from '../assets/css-thumb.png';
import ReactThumb from '../assets/react-thumb.png';
import JSThumb from '../assets/js-thumb.png';
import WPThumb from '../assets/webpack-thumb.png';
import Feature from '../assets/augusta-feature.jpg';

import '../css/Projects.scss';

class Augusta extends Component {
    render () {
        return (
            <section id="project">
                <MinHeader />
                    <div className="work-header wrapper">
                        <div className="work-year">
                            <h1>Year</h1>
                            <p>2017</p>
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
                            <h1>Augusta Rise - React SPA.</h1>
                            <p>Augusta Rise is a housing development located in Omokoroa that’s in the early stages. I developed a single page website to promote the development and lifestyle features of the local area. There’s a lot of scope for growth for the project with additional construction companies planned to purchase lots and the site needed to be built to facilitate this in the near future.</p>
                            <p>The main constraint during this project was a relatively unique one - it’s essentially just a block of land and the website needed to get potential home buyers and construction companies alike excited about the proposition.</p>
                            <ul>
                                <li><Link className="body-link" to="#tech">Technical info & tooling</Link></li>
                                <li><Link className="body-link" to="#links">Production info & GitHub repo</Link></li>
                            </ul>
                        </div>  
                    </div>
                    <div className="image-block">
                        <img src={Feature}></img>
                    </div>
                    <div id="tech" className="tech-block wrapper">
                        <div className="content-wrapper">
                            <h2>Technical info & tooling</h2>
                               
                                <p>As mentioned above the main challenge with this project was due to the land being essentially baron at the time of development. We also knew that although initial requirements were relatively basic (and initially this would be a static website) that as and when additional construction companies came on board that the structure of the site would need to evolve significantly to meet the needs of various third parties.</p>
                                <p>From a UI/UX perspective, a few things were clear following the production of initial low-fidelity wireframes.</p>
                                    <ol>
                                        <li>We needed a visual to really hero the development and allow people to visualise the end product/development. I worked closely with the client’s internal design team on this and they were able to provide an graphical render of the development which we featured in the website banner.</li>
                                        <li>Clarifying the current stage of the development would be key and also the relatively boutique nature of the development. This was done by creating a landscape concept plan clearly displaying each stage of the development.</li>
                                    </ol>
                                <p>Given the requirements (and after an initial vanilla JS build) I decided to use React, and in particular, well structured small components and associated styles to allow for future expansion of the site. </p>
                                <p>To support main requirement on the next phase of the project (listings from other construction companies) the data is managed using an JavaScript object in what is essentially JSON format. This allows me to quickly and efficiently content manage new listings and do a simply import and deployment at any time. There’s also a lot of scope to enhance the view of listings such as using state and lifecycle methods to allow for functionality such as removing listings from view, filtering etc.</p>
                        </div>
                        <div className="tooling">
                            <img src={GITThumb} alt="Git"></img>
                            <img src={NPMThumb} alt="NPM"></img>
                            <img src={PSDThumb} alt="Photoshop"></img>
                            <img src={SketchThumb} alt="Sketch"></img>
                            <img src={CSSThumb} alt="CSS"></img>  
                            <img src={JSThumb} alt="JavaScript"></img>
                            <img src={ReactThumb} alt="React"></img>
                            <img src={WPThumb} alt="Webpack"></img>
                        </div>
                    </div>
                    <div id="links" className="work-links wrapper">
                    <h2>Production app & GitHub repo</h2>
                        <ul>
                            <li><a className="body-link" href="https://augustarise.co.nz/" target="blank">Visit website</a></li>
                            <li><a className="body-link" href="https://github.com/toddmoody/augusta-rise-react" target="blank">GitHub repo</a></li>
                        </ul>
                    </div>
                <WorkCTA />
                <Footer />
            </section>
        );
    }
}

export default Augusta;
