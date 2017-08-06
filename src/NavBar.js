import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

export default () =>
  <div className="NavBar-container">
    <div className="NavBar-item">
      <Link to="call-for-papers">call for papers</Link>
    </div>
    <div className="NavBar-item">
      <Link to="keynote-speakers">keynote speakers</Link>
    </div>
    <div className="NavBar-item">
      <Link to="information">information</Link>
    </div>
  </div>;
