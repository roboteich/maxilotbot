import React from 'react';
import { Link } from 'react-router-dom';

const Choose = () => (
  <div>
    <h1>Menu</h1>
    <ul>
    <li><Link to="/cook/pizza">Pizza</Link></li>
    <li><Link to="/cook/burger">Hamburger</Link></li>
    <li><Link to="/cook/hotdog">Hotdog</Link></li>
    <li><Link to="/cook/crabcake">Crab Cake</Link></li>
    <li><Link to="/cook/corn">Corn</Link></li>
    </ul>
  </div>
)

export default Choose;