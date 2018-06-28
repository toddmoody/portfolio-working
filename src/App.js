import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom'

import './App.scss';

import Home from './pages/Home'
import Rft from './pages/Rft'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div>
      <HashRouter>
          <div>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route exact path="/work-rft" component={Rft}/>
              <Route exact path="/contact" component={Contact}/>
            </div>
          </div>
      </HashRouter>
        <div className="App">
        </div>
      </div>
    );
  }
}

export default App;
