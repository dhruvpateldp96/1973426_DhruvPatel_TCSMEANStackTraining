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
        <h1>Section_7_1.20</h1>
      </Link>
      <Link
        className="navbar-brand nav-link text-lg brand-text"
        to="/budgetplanner"
      >
        <h1>Phase1_S-6_1.22_(Budget Planner)</h1>
      </Link>

      <Link className="navbar-brand nav-link text-lg brand-text" to="/blogs">
        <h1>Phase1 End Blogs</h1>
      </Link>

      <Link
        className="navbar-brand nav-link text-lg brand-text"
        to="/cartmanagement"
      >
        <h1>P2-CArtManagement</h1>
      </Link>
    </div>
  );
};

export default Landing;
