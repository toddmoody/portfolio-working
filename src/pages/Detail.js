import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";

import MinHeader from '../components/MinHeader';
import WorkCTA from '../components/WorkCTA';
import Footer from '../components/Footer';

import GITThumb from '../assets/git-thumb.png';
import NPMThumb from '../assets/npm-thumb.png';
import PSDThumb from '../assets/psd-thumb.png';
import SketchThumb from '../assets/sketch-thumb.png';
import SASSThumb from '../assets/scss-thumb.png';
import GoogleThumb from '../assets/google.png';
import JSThumb from '../assets/js-thumb.png';
import WPThumb from '../assets/webpack-thumb.png';
import Feature from '../assets/dc-feature.png';

import '../css/Projects.scss';

class Detail extends Component {
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
                                <li>RESTful API integration</li>
                                <li>Deployment</li>
                            </ul>
                        </div>
                        <div className="work-title">
                            <h1>Detail Connect.</h1>
                            <p>Detail Connect provide technical steel drafting and detailing services nationwide. The client needed an elegant solution to reinforce the breadth of their service offering, and showcase projects and related imagery. I decided to base this solution on a JavaScript integration with the Google Maps APIv3. The solution also needed to be future proofed in order to make an integration with WorkFlowMax as seamless as possible at a later date (more below).</p>
                            <p>The client had an existing WordPress website but after some extensive investigation there was nothing suitable on the plugin market that would meet their needs due to their very bespoke visual and filtering requirements. So, this was a great opportunity to get to know the Google Maps API and test out some JavaScript ES6 syntax along the way.  Check out some grabs of the solution below and find out more about my process.</p>
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
                                <h3>Requirements and build</h3>
                                    <p>The fundamental requirement of this project was to display project markers based on lat/long coordinates and related information. An integration with Google Maps was an obvious choice to achieve this.</p>
                                    <p>The client’s project data (including lat/long coordinates) was extensive and stored in WorkFlow Max. Initially, the idea was to automate project data to the map via an integration with the WFM API, however following initial testing it was determined this could potentially be a security risk as a lot of commercially sensitive information was be accessible (pricing, proposals etc). In the interim, it was decided that I would develop the app to read the exact WFM JSON-P data schema in order to streamline a future integration which would be put if they apply tighter controls to their API (but initially the data would be manually imported and accessed via a JS object).</p>
                                    <p>Following the development of an MVP using vanilla Javascript that included all of the project data (90+ projects across the country) it was obvious that the UX would need to be improved so projects would be easier to find, in particular in areas with a high density of markers. Luckily Google offer the MarkerCluster library which allowed for a much clearer view.</p>
                                    <p>The next requirement was around displaying relevant project data for each individual project (i.e. project, services, project weight etc) incl. imagery that was stored in dropbox.  I utilised the native Google Infowindow as the container for the data which would be presented to the user on-click. There were some challenges here, in particular, building logic specific to each service as the marker information/layout varied based on the service provided (and in some cases multiple services were provided). Displaying the imagery within the infowindow via Dropbox also posed some challenges. Using standard Dropbox URL’s was not possible as they would attempt to load within a dropbox container - and I needed full control of a raw hosted image. A simple regex based solution was applied to take the original URL query string and update it so the application had access to the raw image file (which was then further modified in the CSS). This also needed to be done without making any changes to the original data export so future data uploads could be made without modification and the integrity of the data format was retained/protected.</p>
                                    <p>Lastly, once the relevant project marker pins were displayed, including accurate project data I set about building user friendly project-based filtering. Again, there was a degree of complexity mainly around the fact that some jobs needed to be displayed across multiple service selections e.g. a single job may be have included up to for different services and therefore would need to display across all of those filter selections. I also wanted users to be able to select multiple criteria for filtering which added a substantial more conditional logic.</p>
                        </div>
                        <div className="tooling">
                            <img src={GITThumb} alt="Git"></img>
                            <img src={NPMThumb} alt="NPM"></img>
                            <img src={PSDThumb} alt="Photoshop"></img>
                            <img src={SketchThumb} alt="Sketch"></img>
                            <img src={GoogleThumb} alt="Google API"></img>
                            <img src={SASSThumb} alt="SASS"></img>  
                            <img src={JSThumb} alt="JavaScript"></img>
                            <img src={WPThumb} alt="Webpack"></img>
                        </div>
                    </div>
                    <div id="links" className="work-links wrapper">
                    <h2>Production app & repo</h2>
                        <ul>
                            <li><a className="body-link" href="https://www.detailconnect.nz/projects/" target="blank">Visit website</a></li>
                            <li><a className="body-link" href="https://github.com/toddmoody/detail-connect-wfm" target="blank">GitHub repo</a></li>
                        </ul>
                    </div>
                <WorkCTA />
                <Footer />
            </section>
        );
    }
}

export default Detail;
