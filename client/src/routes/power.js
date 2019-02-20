import React from 'react';
import { Link } from 'react-router-dom';

const Power = () => (
  <div className="cube">
    <div className="face">
      <div className="power-screen screen">
        <Link className="btn btn-alert" to="/start">power</Link>
      </div>
  </div>
</div>
)

export default Power;