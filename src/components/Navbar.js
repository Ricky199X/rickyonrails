import React from 'react';
import { Link, withRouter } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="transparent">
      <div class="nav-wrapper">
        <div class="container">
          <a class="brand-logo left-align">Ricky Rojas</a>
          <ul id="nav-mobile" class="right hide-on-small-and-down">
            <li>
              <Link to='/about' class="white-text">About</Link>
            </li>
            <li>
              <Link to='/projects' class="white-text">Projects</Link>
            </li>
            <li>
              <Link to='/contact' class="white-text">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default withRouter(Navbar);
