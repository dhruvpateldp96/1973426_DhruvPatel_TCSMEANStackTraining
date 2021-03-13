import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-5">
      {/* <div className="navbar-header">
        <Link
          className="navbar-brand nav-link text-white text-lg brand-text"
          to="/"
        >
          Assignment 2
        </Link>
        <Link
          className="navbar-brand nav-link text-white text-lg brand-text"
          to="/"
        >
          Assignment 3
        </Link> 
      </div>*/}
      <ul className="navbar-nav ml-auto text-light d-inline-block">
        <li className="nav-item d-inline-block mr-4">
          <i className="fab fa-react fa-5x" id="react-logo" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
