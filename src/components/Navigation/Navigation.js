import React, { useState } from "react";
import "./Navigation.css";
import logo from "../../accets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav_parent_div">
      <header className="nav_container">
        {/* TOP BAR */}
        <div className="nav_top">
          <div className="nav_logo">
            <Link to="/home">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="nav_actions">
            <p className="nav_email_p">
              <FontAwesomeIcon icon={faEnvelope} /> support@solutiongrid.com
            </p>

            <div className="nav_phone">
              <a
                href="https://wa.me/+447932506226"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FontAwesomeIcon
                    className="nav_faWhatsapp"
                    icon={faWhatsapp}
                  />{" "}
                  +44 7932 506226
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* MENU BAR */}
        <div className="nav_bottom">
          <div className="menu_icon" onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon
              className="nav_icon"
              icon={menuOpen ? faTimes : faBars}
            />
          </div>

          <ul className={menuOpen ? "nav_menu active" : "nav_menu"}>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <Link to="/home">Home</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <Link to="/about"> About</Link>{" "}
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <Link to="/services">Services</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </li>
            {/* <li>
              <FontAwesomeIcon icon={faEnvelope} /> Login
            </li> */}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
