import React from 'react';
import { Link } from 'react-router-dom';

const Cook = () => (
  <div>
    <h1>Now we're cooking with lasers</h1>
    <Link to="/eat">it's ready to eat</Link>
  </div>
)

export default Cook;