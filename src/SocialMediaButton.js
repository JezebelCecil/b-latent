import React, { Component } from 'react';

import './SocialMediaButton.css';
import FontAwesome from 'react-fontawesome';

class SocialMediaButton extends Component {
  render() {
    const { name, link } = this.props;

    return (
      <a href={link}>
        <div className="soc-med-btn-container">
          <FontAwesome name={name} size="lg" />
        </div>
      </a>
    );
  }
}

export default SocialMediaButton;
