import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <div>
    <h1>Are you hungry?</h1>
    <Link to="/choose">yes</Link>
  </div>
)

export default Welcome;