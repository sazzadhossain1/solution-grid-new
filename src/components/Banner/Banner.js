import React from "react";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner_parent_div">
      <h1>We Can Help You Grow Your Business</h1>

      <p>
        We specialise in the Websites, Mobile Apps, Digital Marketing, Branding
        and IT Solutions
      </p>

      <div className="banner_grid_div">
        <Link>
          <div className="banner_cart_one banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>Software & System Development</span>
          </div>
        </Link>

        <Link>
          <div className="banner_cart_two banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>Ai Automation</span>
          </div>
        </Link>

        <Link>
          <div className="banner_cart_three banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>Website Design & Development</span>
          </div>
        </Link>

        <Link>
          <div className="banner_cart_four banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>Video Editing</span>
          </div>
        </Link>

        <Link>
          <div className="banner_cart_five banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>Digital Marketing</span>
          </div>
        </Link>

        <Link>
          <div className="banner_cart_six banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>UI/UX Design</span>
          </div>
        </Link>

        <Link>
          <div className="banner_cart_saven banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>Graphic Design</span>
          </div>
        </Link>

        <Link>
          <div className="banner_cart_eight banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>Content Development</span>
          </div>
        </Link>
      </div>

      <div className="banner_btn_parent_div">
        <Link className="banner_link_btn" to="" target="_blank">
          <div className="banner_btn_div">Book a Free Consultation</div>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
