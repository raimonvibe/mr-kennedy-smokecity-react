import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/play">Play</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/genre">Genre</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <h2 className="logo">S<span id="gold">M</span>C</h2>
    </nav>
  );
};

export default Navigation;
