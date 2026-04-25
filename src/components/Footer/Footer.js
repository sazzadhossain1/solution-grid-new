import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import footerMap from "../../accets/footer/footerMap.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QrCode from "../../accets/footer/footerQrCode.jpeg";
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
                <FontAwesomeIcon icon={faLocation} /> 40 Winsford Terrace LONDON
                N18 1BS
              </p>
            </Link>
            <Link>
              <p>
                <FontAwesomeIcon icon={faPhone} /> +44 7932 506226
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
            <img src={QrCode} alt="" />
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
          <small>© 2026 SolutionGrid . All rights reserved</small>
          <br />
          {/* <small className="privacy">Privacy Policy</small>
          <small className="terms">Terms & Conditions</small>
          <small className="cookie">Cookie Policy</small> */}
        </div>
        {/* <div className="footer_logo_second_flex_div">
         
          <p>
            SOLUTION GRID. <FontAwesomeIcon icon={faLocation} />
          </p>
          <span>Positive SSL Wildcard</span>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
