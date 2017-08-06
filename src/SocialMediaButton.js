import React, { Component } from 'react';

import './SocialMediaButton.css';
import FontAwesome from 'react-fontawesome';

class SocialMediaButton extends Component {
  render() {
    const { name, link } = this.props;

    return (
      <div className="SocialMediaButton-container">
        <a href={link}>
          <FontAwesome name={name} size="lg" />
        </a>
      </div>
    );
  }
}

export default SocialMediaButton;
