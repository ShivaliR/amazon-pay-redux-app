import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-iO3uoLpspqkJaPuDZYBlANzZ0APQhGmkqVkSV5crC5RJ7sc9EzVnKjnUjREfm59iQ&usqp=CAU" alt="" width="100" height="20"/>
           
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
              Your balance: $100
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
