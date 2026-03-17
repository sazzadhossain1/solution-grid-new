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
          <div className="banner_cart_one banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </Link>

        <Link>
          <div className="banner_cart_two banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </Link>

        <Link>
          <div className="banner_cart_three banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </Link>

        <Link>
          <div className="banner_cart_four banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </Link>

        <Link>
          <div className="banner_cart_five banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </Link>

        <Link>
          <div className="banner_cart_six banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </Link>

        <Link>
          <div className="banner_cart_saven banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </Link>

        <Link>
          <div className="banner_cart_eight banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faEnvelope} />
            <br />
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </Link>
      </div>

      <div className="banner_btn_parent_div">
        <Link
          className="banner_link_btn"
          to="https://www.vservices.com/"
          target="_blank"
        >
          <div className="banner_btn_div">Hear from an expert</div>
        </Link>
      </div>
      <svg width="200" height="200" viewBox="0 0 720 540">
        <path className="st0" d="M0,28l45,477l648,24L714,0L0,28z" />
      </svg>
    </div>
  );
};

export default Banner;
