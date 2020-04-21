import React from 'react';
import { Link, withRouter } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav">
      <nav class="transparent">
        <div class="container">
          <Link to='/' class="brand-logo left-align">Ricky Rojas</Link>
          <ul id="nav-mobile" class="right hide-on-small-and-down ">
            <li>
              <Link to='/about' class="white-text active">About</Link>
            </li>
            <li>
              <Link to='/projects' class="white-text active">Projects</Link>
            </li>
            <li>
              <Link to='/contact' class="white-text active">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

  )
};

export default withRouter(Navbar);
