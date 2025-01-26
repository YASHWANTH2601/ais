/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
// import { Link } from "react-router-dom";
import "./Navbar.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleNavbar = () => {
    setIsMobile(!isMobile);
  };

  return (
    <>
      <nav className="navbar">
        <div
          style={{ alignSelf: "flex-start" }}
          className="desktopNavIconContainer"
        >
          <img className="logo" src="" alt="logo" />
        </div>

        <div className={`navbar-links ${isMobile ? "active" : ""}`}>
          <ul className="mobileNavList">
            <li>
              {/* <Link to="/buy">
              </Link> */}
              Buy
            </li>
            <li>
              {/* <Link className="links" to="/sell">
              </Link> */}
              Sell
            </li>
          </ul>
        </div>
        <button className="toggle-button" onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
      <nav className="desktopNav">
        <div className="desktop">
          <div className="desktopNavIconContainer">
            <img className="logo" src="" alt="logo" />
          </div>
          <div></div>
          <div>
            <ul className="desktopNavList">
              <li>HOME</li>
              <li>PAGES</li>
              <li>ABOUT</li>
              <li>BLOG</li>
              <li>CONTACT</li>
            </ul>
          </div>
          <div className="desktopNavSearch">
            <input
              className="desktopNavSearchInput"
              type="search"
              placeholder="Search"
            />
            <button className="desktopNavSearchButton">
              <CiSearch size={20} fill="#fff" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
