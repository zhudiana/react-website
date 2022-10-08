import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaRegUser, FaExternalLinkAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { Button } from "./Button";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleCLick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src="https://razor.com/wp-content/themes/razor/assets/images/logo.png"
              alt="logo"
              className="nav-logo"
            />
          </Link>
          <div className="menu-icon" onClick={handleCLick}>
            {click ? <FiX /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/razortv"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Razor Tv
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/support"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Support & Parts
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/micro"
                className="nav-links"
                onClick={closeMobileMenu}
                style={{ color: "#e50d02" }}
              >
                Razor Micromobility <FaExternalLinkAlt className="icon" />
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--medium">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
