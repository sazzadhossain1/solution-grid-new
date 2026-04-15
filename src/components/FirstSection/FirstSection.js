import React from "react";
import "./FirstSection.css";
import firstPhoto from "../../accets/firstSection/firstPhoto.jpg";
import secondPhoto from "../../accets/firstSection/secondPhoto.jpg";
import { Link } from "react-router-dom";

const FirstSection = () => {
  return (
    <div className="first_section_parent">
      <h1 className="firstSection_heading">
        Come Dominate the World With solution grid
      </h1>

      <p className="firstSection_first_p">
        Solution grid specialises in the field of websites, mobile apps, digital
        marketing, branding, and IT solutions in general, for companies of all
        sizes and industry segments. We focus on providing you with meaningful
        and immediate results.
      </p>

      <div className="fistSection_grid_div">
        {/* 🔴 FIRST SVG */}
        <div className="firstSection_first_cart_div">
          <svg width="500" height="400" viewBox="0 0 730 540">
            <defs>
              <linearGradient
                id="borderGradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ff2d7a" />
                <stop offset="100%" stopColor="#ff4d2d" />
              </linearGradient>
            </defs>

            <path
              d="M0,28l45,477l648,24L714,0L0,28z"
              fill="none"
              stroke="url(#borderGradient1)"
              strokeWidth="20"
              strokeLinejoin=""
            />
          </svg>
          <img className="firstPhoto" src={firstPhoto} alt="" />
          <div className="first_section_cart_text_div">
            <h3>ARE YOU A START-UP?</h3>
            <p>
              The more professional your Website and Branding is the more
              advantages you can gain. Speak to us, we can do this for you
            </p>
            <Link>
              <button className="firstSection_btn1">Let's Build a Brand</button>
            </Link>
          </div>
        </div>

        {/* 🟣 SECOND SVG */}
        <div className="firstSection_second_cart_div">
          <svg width="500" height="400" viewBox="0 0 730 540">
            <defs>
              <linearGradient
                id="borderGradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#8e2de2" />
                <stop offset="100%" stopColor="#4a00e0" />
              </linearGradient>
            </defs>

            <path
              d="M0,28l45,477l648,24L714,0L0,28z"
              fill="none"
              stroke="url(#borderGradient2)"
              strokeWidth="20"
              strokeLinejoin=""
            />
          </svg>
          <img className="secondPhoto" src={secondPhoto} alt="" />
          <div className="first_section_cart_text_div">
            <h3>Have you automated your business processes yet?</h3>
            <p>
              The more professional your Website and Branding is the more
              advantages you can gain. Speak to us, we can do this for you
            </p>
            <Link>
              <button className="firstSection_btn2">Let's Build a Brand</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
