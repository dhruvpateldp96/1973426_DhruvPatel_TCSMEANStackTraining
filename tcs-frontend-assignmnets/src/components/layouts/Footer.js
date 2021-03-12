import React from "react";

function Footer() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-bottom">
      <div className="col-md-12">
        <div className="footer p-3 mt-2 text-center bg-dark text-light">
          Developed By:{" "}
          <span className="text-warning font-weight-normal">
            Dhruv Himanshu Patel 1973426
          </span>
          , Using <i className="fab fa-react" /> React JS &amp; Redux JS
          integrated with no external data API
          {/* <a
               href="http:www.omdbapi.com/"
               target="_blank"
               rel="noopener noreferrer"
             >
               OMDB
             </a> */}
        </div>
      </div>
    </nav>
  );
}

export default Footer;
