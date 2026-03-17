import React from "react";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner_parent_div">
      <h1>We can Help You Grow Your Business</h1>
      <p>
        We specialise in the Websites, Mobile Apps, Digital Marketing, Branding
        and IT Solutions
      </p>
      <div className="banner_grid_div">
        <Link>
          <div className="banner_cart_one">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />

            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </Link>
        <Link>
          <div className="banner_cart_two">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </Link>
        <Link>
          <div className="banner_cart_three">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </Link>
        <Link>
          <div className="banner_cart_four">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </Link>
        <Link>
          <div className="banner_cart_five">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </Link>
        <Link>
          <div className="banner_cart_six">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </Link>
        <Link>
          <div className="banner_cart_saven">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </Link>
        <Link>
          <div className="banner_cart_eight">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </Link>
      </div>
      <Link className="banner_link_btn">
        <div className="banner_btn_div">Hear from an expert</div>
      </Link>
    </div>
  );
};

export default Banner;
