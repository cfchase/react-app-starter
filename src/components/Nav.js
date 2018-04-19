import * as React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="nav">
    <div><Link to="/">Home</Link></div>
    <div><Link to="/route2">Route2</Link></div>
  </div>
);

export default Nav;