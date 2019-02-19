import React from 'react';
import { Link } from 'react-router-dom';

const Thanks = () => (
  <div className="cube">
    <div className="face">
      <div className="thanks-screen screen">
        <h1>Thanks</h1>
        <Link to="/">I want seconds</Link>
      </div>
  </div>
</div>
)

export default Thanks;