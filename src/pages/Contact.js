import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";

import Logo from '../assets/tm-logo.png'

class Home extends Component {
    render() {
        return (
            <div>
                <section className="">
                    <header>
                        <img className="logo" src={Logo}></img>
                        <nav>
                            <Link to="/">Back</Link>
                        </nav>
                    </header>
                    <div>
                        <p>This will be the contact page!</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;