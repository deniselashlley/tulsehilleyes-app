import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/HTMLash_logo_colour.jpg";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [activeClass, setActiveClass] = useState('');

  const handleToggle = () => {
    setActive((prevState) => !prevState);
    active ? setActiveClass("is-active") : setActiveClass('')
  }

    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="HTMLash" />
            </Link>
            <div
              className={`navbar-burger burger ${activeClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0} 
              onKeyPress={handleToggle}
              onClick={handleToggle}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${activeClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
