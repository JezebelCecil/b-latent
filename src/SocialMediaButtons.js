import React, { Component } from 'react';

import './SocialMediaButtons.css';
import SocialMediaButton from './SocialMediaButton.js';

class SocialMediaButtons extends Component {
  render() {
    return (
      <div className="SocialMediaButtons-container">
        <div className="SocialMediaButtons-item">
          <SocialMediaButton
            name="facebook-square"
            link="http://www.facebook.com"
          />
        </div>
        <div className="SocialMediaButtons-item">
          <SocialMediaButton name="instagram" link="http://www.instagram.com" />
        </div>
        <div className="SocialMediaButtons-item">
          <SocialMediaButton
            name="twitter-square"
            link="http://www.twitter.com"
          />
        </div>
      </div>
    );
  }
}

export default SocialMediaButtons;
