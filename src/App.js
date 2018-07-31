import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom'

import './App.scss';

import Home from './pages/Home'
import Rft from './pages/Rft'
import Detail from './pages/Detail'
import Augusta from './pages/Augusta'
import Contact from './components/Contact'
import Matamata from './pages/Matamata';

class App extends Component {
  render() {
    return (
      <div>
      <HashRouter>
          <div>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route exact path="/work-rft" component={Rft}/>
              <Route exact path="/work-detail" component={Detail}/>
              <Route exact path="/work-augusta" component={Augusta}/>
              <Route exact path="/work-matamata" component={Matamata}/>
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
