import './Menu.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <>
    <header className="navbar container-fluid">
      <div className="container">
        <Link to="/" className="navbar-title navbar-item fw-bold">
          ProfileMaster
        </Link>
        <Link to="/" className="navbar-item fw-bold">
          Home
        </Link>
      </div>
    </header>
  </>
);

export default Menu;
