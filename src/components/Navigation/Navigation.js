import React from "react";
import "./Navigation.css";
import logo from "../../accets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <div className="navigation_main_parent_div">
      <div>
        <div className="navigation_flex_div">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="navigation_child_flex_div">
            <p>
              <FontAwesomeIcon className="navigation_icon" icon={faEnvelope} />{" "}
              Contact
            </p>
            <p>
              {" "}
              <FontAwesomeIcon
                className="navigation_icon"
                icon={faWandMagicSparkles}
              />{" "}
              Free Consultation
            </p>
            <div className="navigation_number_div">
              <span>017 XXX XXX XX</span>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation_lower_part_div">
        <ul>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> Our Services
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> Start-ups
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> Existing Business
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> Digital Marketing
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> eCommerce
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> Mobile App
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> ERP Solution
          </li>
          <li>Video animation</li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
