import React, { Component } from 'react';
import './index.css';

import BlatentTitle from './BlatentTitle.js';
import Body from './Body.js';
import SocialMediaButtons from './SocialMediaButtons.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <BlatentTitle />
        </div>
        <div className="row">
          <Body />
        </div>
        <div
          className="row"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <SocialMediaButtons />
        </div>
      </div>
    );
  }
}

export default App;
