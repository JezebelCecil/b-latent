import React, { Component } from 'react';

import './SocialMediaButtons.css';
import SocialMediaButton from './SocialMediaButton.js';

class SocialMediaButtons extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-4">
          <SocialMediaButton
            name="facebook-square"
            link="http://www.facebook.com"
          />
        </div>
        <div className="col-xs-4">
          <SocialMediaButton name="instagram" link="http://www.instagram.com" />
        </div>
        <div className="col-xs-4">
          <SocialMediaButton
            name="twitter-square"
            link="http://www.twitter.com"
          />
        </div>
      </div>
    );
  }
}

// const styles = {
//   container: {
//     alignItems
//   }
// };

export default SocialMediaButtons;
