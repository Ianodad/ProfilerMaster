import './Menu.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <>
    <header className="navbar container-fluid">
      <div className="container">
        <Link to="/" className="navbar-title navbar-item">
          ProfileMaster
        </Link>
        <Link to="/" className="navbar-item">
          Home
        </Link>
      </div>
    </header>
  </>
);

export default Menu;
