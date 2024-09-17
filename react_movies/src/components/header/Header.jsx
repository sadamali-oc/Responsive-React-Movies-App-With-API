import React from "react";
import "./header.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
  return (
    <>
      <header>
        <div className="container flexSB">
          <nav className="flexSB">
            <div className="logo">
              <img src="/images/logo.png" alt="Logo" />
            </div>
            <ul className="flexSB">
              <Link to="/">Home</Link>
              <Link to="/series">Series</Link>

              <Link to="/movies">Pages</Link>

              <Link to="/pricing">Pricing</Link>
              <Link to="/contact">Contact</Link>
            </ul>
            <button className="toggle">
              <i className="fa fa-bars"></i>
            </button>
          </nav>


          <div className="account flexSB">

            <i className="fa fa-search"></i>
            <i className="fa fa-bell"></i>

            <i className="fa fa-user"></i>


          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
