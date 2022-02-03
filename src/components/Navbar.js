import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
              <img src="https://s3-ap-southeast-1.amazonaws.com/p2swebsite/images/smeKhabar/news/AxisBank24thJuly_1500883592992_38.png" alt="" width="100" height="40"/>
           
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
            <button disabled={true} type="button" className="btn btn-light">
              Your balance: $1000
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
