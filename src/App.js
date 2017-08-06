import React, { Component } from 'react';
import './index.css';

import BlatentTitle from './BlatentTitle.js';
import Body from './Body.js';
import NavBar from './NavBar.js';
import SocialMediaButtons from './SocialMediaButtons.js';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <div>
          <BlatentTitle />
        </div>
        <div>
          <Body />
        </div>
        <div style={{ width: '100%' }}>
          <NavBar />
        </div>
        <div>
          <SocialMediaButtons />
        </div>
      </div>
    );
  }
}

export default App;
