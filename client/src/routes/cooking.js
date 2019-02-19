import React from 'react';
import { Link } from 'react-router-dom';

const Cooking = () => (
  <div className="cube">
    <div className="face">
      <div className="cooking-screen screen">
        <h1>Now we're cooking with lasers</h1>
        <Link to="/ratings">it's ready to eat</Link>
      </div>
    </div>
  </div>
)

export default Cooking;