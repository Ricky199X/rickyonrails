import React from 'react';


const Navbar = () => {
  return (
    <nav class="transparent">
      <div class="nav-wrapper">
        <div class="container">
          <a class="brand-logo left-align">Ricky Rojas</a>
          <ul id="nav-mobile" class="right hide-on-small-and-down">
            <li>
              <a href="#" class="white-text">Home</a>
            </li>
            <li>
              <a href="#" class="white-text">About</a>
            </li>
            <li>
              <a href="#" class="white-text">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
