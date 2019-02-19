import React from 'react';
import { Link } from 'react-router-dom';

const Rating = () => (
  <div className="cube">
    <div className="face">
      <div className="rating-screen screen">
        <h1>My Food Was</h1>
        <ul>
          <li><Link to="/thanks/1">feh</Link></li>
          <li><Link to="/thanks/2">meh</Link></li>
          <li><Link to="/thanks/3">eh</Link></li>
          <li><Link to="/thanks/4">mmm</Link></li>
          <li><Link to="/thanks/5">nom nom</Link></li>
        </ul>
      </div>
    </div>
  </div>
)

export default Rating;