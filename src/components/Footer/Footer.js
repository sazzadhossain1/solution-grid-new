import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import footerMap from "../../accets/footer/footerMap.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import footerLogo from "../../accets/logo/logo.png";

const Footer = () => {
  return (
    <div className="footer_parent_div">
      <div className="footer_blank_div"></div>
      <div>
        <div className="footer_grid_div">
          <div>
            <h2>Solution Grid</h2>
            <Link>
              <p>
                {/* <FontAwesomeIcon icon={faLocation} /> 3653 Briargrove Ln,
                Dallas, TX 75287 */}
              </p>
            </Link>
            <Link>
              <p>
                <FontAwesomeIcon icon={faPhone} /> +1.469.531.1550
              </p>
            </Link>
            <Link>
              <p>
                <FontAwesomeIcon icon={faWhatsapp} /> +880179.359.6432
              </p>
            </Link>
            <Link>
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> support@abaacorp.com
              </p>
            </Link>
            {/* <Link>
              <p>Terms & Condition</p>
            </Link>
            <Link>
              <p>Complaints</p>
            </Link> */}
          </div>
          <div>
            <h2>Sitemap</h2>
            <Link>
              <p>About Us</p>
            </Link>
            <Link>
              <p>Our Service</p>
            </Link>
            <Link>
              <p>Portfolio</p>
            </Link>
            <Link>
              <p>Contact</p>
            </Link>
            <Link>
              <p>Mail Access</p>
            </Link>
          </div>
          <div>
            <h2>Digital Marketing</h2>
            <Link>
              <p>Search Engine Optimisation</p>
            </Link>
            <Link>
              <p>Search Engine Marketing</p>
            </Link>
            <Link>
              <p>Social Media Marketing</p>
            </Link>
            <Link>
              <p>Email Marketing</p>
            </Link>
            <Link>
              <p>SMS Marketing</p>
            </Link>
            <Link>
              <p>Mobile Marketing</p>
            </Link>
          </div>
          <div>
            <h2>vBusiness</h2>
            <Link>
              <p>800comms</p>
            </Link>
            <Link>
              <p>Certax London</p>
            </Link>
            <Link>
              <p>Consulting Connect</p>
            </Link>
            <Link>
              <p>EventsPMO</p>
            </Link>
            <Link>
              <p>Mobelique</p>
            </Link>
            <Link>
              <p>KVTech</p>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img className="footerMap" src={footerMap} alt="" />
        <div className="footer_flex_parent_div">
          <div className="footer_flex_div">
            <div className="footer_media_div">
              <FontAwesomeIcon className="facebook" icon={faFacebook} />
              <FontAwesomeIcon className="twitter" icon={faTwitter} />
              <FontAwesomeIcon className="linkdin" icon={faLinkedin} />
              <FontAwesomeIcon className="instagram" icon={faInstagram} />
            </div>
            {/* <div className="footer_map_text_div">
              <p>85 Tottenham Court Road, London, W1T 4TQ, UK</p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="footer_logo_flex_div">
        <div className="footer_copy_right_text_div">
          <small>© 2026 Solution grid Ltd. All rights reserved</small>
          <br />
          <small className="privacy">Privacy Policy</small>
          <small className="terms">Terms & Conditions</small>
          <small className="cookie">Cookie Policy</small>
        </div>
        <div className="footer_logo_second_flex_div">
          {/* <img className="footer_logo" src={footerLogo} alt="" /> */}
          <p>
            SOLUTION GRID. <FontAwesomeIcon icon={faLocation} />
          </p>
          <span>Positive SSL Wildcard</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
