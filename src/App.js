import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

import BlatentTitle from './BlatentTitle.js';
import Body from './Body.js';
import NavBar from './NavBar.js';
import SocialMediaButtons from './SocialMediaButtons.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App-container">
          <div style={{ width: '100%' }}>
            <BlatentTitle />
          </div>
          <div>
            <Body>
              <Route exact path="/" />
              <Route
                path="/call-for-papers"
                component={() => <span>call for papers</span>}
              />
              <Route
                path="/keynote-speakers"
                component={() => <span>keynote-speakers</span>}
              />
              <Route
                path="/information"
                component={() => <span>information</span>}
              />
            </Body>
          </div>
          <div style={{ width: '100%' }}>
            <NavBar />
          </div>
          <div>
            <SocialMediaButtons />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
