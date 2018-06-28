import React, { Component } from 'react';
import Typewriter from '../components/home/Typewriter';
import { HashLink as Link } from "react-router-hash-link";
import ReactTooltip from 'react-tooltip'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FaChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown';
import Logo from '../assets/tm-logo.png';
import ProfilePic from '../assets/profile.jpg';
import iconUI from '../assets/icon-ui.png';
import iconCode from '../assets/icon-code.png';
import iconMarketing from '../assets/icon-marketing.png';
import LogoStrip from '../assets/logo-strip.png';
import RFTThumb from '../assets/rft-thumb.png';
import DCThumb from '../assets/dc-thumb.png';

import Footer from '../components/Footer';

import '../css/Header.scss';
import '../css/Home.scss';

class Home extends Component {
    render() {
        return (
            <div id="home-bgrd">
                <section className="header-wrapper">
                    <header>
                        <img className="logo" src={Logo}></img>
                        <nav>
                            <Link className="nav-item mob-hide" to="/#about">About</Link>
                            <Link className="nav-item mob-hide" to="/#work">Work</Link>
                            <Link className="nav-item mob-hide" to="/#work">Clients</Link>
                        </nav>
                        <div>
                            <Link className="nav-item-plus" to="/contact">Get in touch</Link>
                        </div>
                    </header>
                    <div className="content-block">
                        <div>
                            <img className="profile-pic" src={ProfilePic} />
                        </div>
                        <div className="dynamic-block">
                            <h1>Hi, I'm Todd. I'm a Front-End</h1>
                            <h1>UI/UX Developer. I build:</h1>
                            <Typewriter />
                        </div>
               
                    </div>  
                    <div className="scroll-down">
                        <Link to="/#about"><FontAwesomeIcon className="bounce arrow" size="lg" icon={FaChevronDown}/></Link>
                    </div>
                </section>
                <section id="about">
                    <div>
                        <h3 className="sub-title-dk">What I do</h3>
                        <p className="statement-dk">Nice to meet you. I’m a front-end UI/UX developer based in Tauranga, New Zealand. I partner with design teams, agencies and clients to build highly intuative web applications. My projects always have a stong focus on responsive design, user experience, performance, and accessability.</p> 
                    </div>
                </section>
                <section id="services"> 
                    <div className="services">
                        <div className="ui-card">
                            <img src={iconUI}></img>
                            <h4>UI/UX Design</h4>
                            <p>I think some of the best digital ideas start with pen & paper. I value interfaces focusing on content structure, intuitive UI patterns and thoughtful interactions. I'm a minimalist who truly believes that less is more.</p>
                            <ReactTooltip place="top" type="light" effect="float"/>
                            <p className="tooltip" data-tip="UX, UI, Web, Mobile">Things I design</p><br />
                            <p className="tooltip" data-tip="Pen & Paper, Gliffy, Sketch, Photoshop">Design Tools</p>
                        </div>
                        <div className="code-card">
                            <img src={iconCode}></img>
                            <h4>Code</h4>
                            <p>I write code for the browser with the end-user in mind. I tend to code from scratch but use libraries, packages, and templates when it makes sense.</p>
                            <p>I’m passionate about front-end as it’s that intersection between design & development where ideas really come to life. I get a buzz coding great creative one line at a time.</p>
                            <p className="tooltip" data-tip="HTML, CSS, SASS, JavaScript, Material Design, React.js, Node.js">Languages & Tech</p><br/>
                            <p className="tooltip" data-tip="VS Code, Atom, Git & GitHub, Chrome Dev Tools, WebPack, Babel">Dev Tools</p>
                        </div>
                        <div className="marketing-card">
                        <img src={iconMarketing}></img>
                            <h4>SEO & Marketing</h4>
                            <p>I write code for the browser with the end-user in mind. I tend to code from scratch but use libraries, packages, and templates when it makes sense. I get a buzz from bringing ideas to life one line of code at time.</p>
                            <p className="tooltip" data-tip="SEO, Google Ad-Words, Email Marketing">Specailist area(s)</p><br/>
                            <p className="tooltip" data-tip="Google Search Console, Keyword Planner, MailChimp, SmartMail PRO">Marketing Tools</p>
                        </div>
                    </div>
                </section>
                <section id="work">
                    <div className="work-intro">
                        <h3 className="sub-title slate">Recent Work</h3>
                        <p className="statement gunmetal">Here’s a selection of my recent clients and work. Want to see more? <Link className="dark-link" to="/contact">Contact me.</Link></p> 
                        <div className="logo-strip wrapper">
                            <img src={LogoStrip} alt="Client Logos"></img>
                        </div>
                    </div>
                    <div className="projects wrapper">
                        <Link to="/work-rft" className="project-card">
                            <div className="project-rft">
                                <img className="project-img" src={RFTThumb}></img>
                            </div>
                            <div className="project-dets">
                                <h3>RFT Engineering</h3>
                                <p>React Single Page Application</p>
                            </div>
                        </Link>
                        <div className="project-card">
                            <div className="project-dc">
                            <img className="project-img padding-top" src={DCThumb}></img>
                            </div>
                            <div className="project-dets">
                                <h3>Detail Connect</h3>
                                <p>JavaScript / Google Maps APIv3 integration</p>
                            </div> 
                        </div>
                        <div className="project-card">
                            <div className="project-img project-ar"></div>
                            <div className="project-dets">
                                <h3>Augusta Rise</h3>
                                <p>React Single Page Application</p>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-img project-mm"></div>
                            <div className="project-dets">
                                <h3>MyMango</h3>
                                <p>Flexbox / JS pricing table</p>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-img project-pf"></div>
                            <div className="project-dets">
                                <h3>Portfolio UI/UX</h3>
                                <p>The UI/UX design process behind my portfolio site</p>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-img project-bh"></div>
                            <div className="project-dets">
                                <h3>Barrett Homes</h3>
                                <p>Custom website styling, SEO & Ad-Words</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="cta">
                    <div className="cta-wrapper wrapper">
                        <h2>Keen to start a project?</h2>
                        <Link to="/contact" className="hero-btn">Let's chat</Link>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Home;