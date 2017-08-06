import React, { Component } from 'react';
import './index.css';

import BlatentTitle from './BlatentTitle.js';
import Body from './Body.js';
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
        <div>
          <SocialMediaButtons />
        </div>
      </div>
    );
  }
}

export default App;
