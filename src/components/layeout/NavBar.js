import React from "react";
//import logo from "../../logo1.svg";
import genetic from "../../genetic.svg";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">
            <img src={genetic} alt="logo" style={{ width: "35px" }} />
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fas fa-bars" style={{ color: "white" }}></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto m-auto mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white text-uppercase ms-5"
                  aria-current="page"
                  to="/"
                >
                  <i className="fa-solid fa-house"></i>&nbsp; Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white text-uppercase ms-5"
                  to="/news"
                >
                  news
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-white text-uppercase ms-5"
                  to="/contact"
                >
                  contact
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary " type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
