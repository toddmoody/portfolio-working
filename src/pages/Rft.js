import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";

import MinHeader from '../components/MinHeader';
import WorkCTA from '../components/WorkCTA';
import Footer from '../components/Footer';

import GITThumb from '../assets/git-thumb.png';
import NPMThumb from '../assets/npm-thumb.png';
import SASSThumb from '../assets/scss-thumb.png';
import ReactThumb from '../assets/react-thumb.png';
import JSThumb from '../assets/js-thumb.png';
import WPThumb from '../assets/webpack-thumb.png';
import Feature from '../assets/rft-feature.jpg';

import '../css/Projects.scss';

class Rft extends Component {
    render () {
        return (
            <section id="rft">
                <MinHeader />
                    <div className="work-header wrapper">
                        <div className="work-year">
                            <h1>Year</h1>
                            <p>2018</p>
                        </div>
                        <div className="work-deliv">
                            <h1>Deliverables</h1>
                            <ul>
                                <li>UI/UX</li>
                                <li>Design</li>
                                <li>Development</li>
                                <li>Deployment</li>
                                <li>SEO</li>
                            </ul>
                        </div>
                        <div className="work-title">
                            <h1>RFT Engineering - React SPA.</h1>
                            <p>RFT Engineering needed a website to start developing their digital presence and acquire new leads and customers. The main objecives were centered around promoting and clarifying their wide range of servces (incl. non-standard Engineering Services available via third parties), and; using their extensive library of project photos effectively to showcase their projects. Organic search was also an imnportant consideration over the longer term.</p>
                            <p>I was really excited to design & develop the site and following the design UI/UX phase, I decided to build the site as a Single Page application in React. Was this overkill for what is effectively a static website? Maybe, but more on this below.</p>
                            <ul>
                                <li><Link className="body-link" to="#tech">Technical info & tooling</Link></li>
                                <li><Link className="body-link" to="#links">Production app & repo</Link></li>
                            </ul>
                        </div>  
                    </div>
                    <div className="image-block">
                        <img src={Feature}></img>
                    </div>
                    <div id="tech" className="tech-block wrapper">
                        <div className="content-wrapper">
                            <h2>Technical info & tooling</h2>
                                <h3>Build</h3>
                                    <p>As I mentioned, I decided to build in React (using Create-React-App). Yes, I could have achieved a similar end result using standard markup, styling and vanilla JS and I'm really concious as a developer not to always reach for the latest tools without good reason. So here's why React seems to be my go-to at the moment...</p>
                                        <ol>
                                            <li>I think there's a lot of opportunity to scale up the functionality of this site. I like knowing that by using React, I'll be in a good space to add features as and when required (rather than trying to integrate a front-end framework at a later date).</li>
                                            <li>Currently, I'm really appreciating the workflow efficiencies provided by React (and in particular Create-React-App). By running a couple of terminal commands and using NPM, I'm up and running in react in minutes.*</li>
                                            <li>When I'm ready to update my production bundle, it's a single NPM command and I'm done including optimisied/minified JS & SASS. No separate Webpack set-up and configuration*</li>
                                            <li>Performance. It's fast! Yes, React is a resonably large dependency but in my experinece it's very fast, even for smaller apps.*</li>
                                            <li>Lastly, I'm enjoying the procees/React way of doing things and even getting used to seeing my markup, or more accurately JSX and JS merged in a single file. There was a time I never thought I would say that!*</li>
                                        </ol>
                                    <small>*Interestingly, only point #1 was specific to this project, which I guess is why I using React a fair bit lately.</small>
                                <h3>Styling</h3>
                                    <p>On the styling side, I used SASS for this applicaiton. I think it works nicely with the component based nature of React, however I prefer to maintain separate SASS files (usually separate ones for larger components). That may change in future as I understand React best-practise would recommend using style objects in the JS file. However for me, as I'm also maintaining a number of vanilla JS applications that don't support style objects, I'd prefer to stick separate files. Again, not specific to this project but I'm also just enjoying the nesting and variable capabilities of SASS.</p>
                                <h3>Challenges & roadblocks</h3>
                                    <p>This project was really smooth and it's always great to have a happy client. I feel like spending a solid amount of time on UI/IX, in particular solid wireframes was a big factor and the process of going from sketches, to low-fidelity wires, and then finally high-fidelity designs. If interested, I've created a seprate project feature on outlining my process there in more depth.</p>
                        </div>
                        <div className="tooling">
                            <img src={GITThumb} alt="Git"></img>
                            <img src={NPMThumb} alt="NPM"></img>
                            <img src={SASSThumb} alt="SASS"></img>  
                            <img src={JSThumb} alt="JavaScript"></img>
                            <img src={ReactThumb} alt="React"></img>
                            <img src={WPThumb} alt="Webpack"></img>
                        </div>
                    </div>
                    <div id="links" className="work-links wrapper">
                    <h2>Production app & repo</h2>
                        <ul>
                            <li><a className="body-link" href="https://rftengineering.co.nz/#/" target="blank">Visit website</a></li>
                            <li><a className="body-link" href="https://github.com/toddmoody/rft-react" target="blank">GitHub repo</a></li>
                        </ul>
                    </div>
                <WorkCTA />
                <Footer />
            </section>
        );
    }
}

export default Rft;
