import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Link
        className="navbar-brand nav-link text-lg brand-text"
        to="/assignment/1"
      >
        <h1>Assignment1</h1>
      </Link>
      <Link
        className="navbar-brand nav-link text-lg brand-text"
        to="/restaurant"
      >
        <h1>Section 7 1.20</h1>
      </Link>
    </div>
  );
};

export default Landing;
