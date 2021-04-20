import React from "react";
import { Link } from "react-router-dom";

const CoursesLanding = () => {
  return (
    <div>
      <ul>
        <li>
          <Link
            className="navbar-brand nav-link text-lg brand-text"
            to="/addcourse"
          >
            <h1>Add Course</h1>
          </Link>
        </li>

        <li>
          <Link
            className="navbar-brand nav-link text-lg brand-text"
            to="/getcourses"
          >
            <h1>Get All Courses</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CoursesLanding;
