import React from "react";
import "./FifthSection.css";
import fifthSectionPhoto from "../../accets/fifthSection/fiftSectionPhoto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FifthSection = () => {
  return (
    <div className="fifthSection_parent_div">
      <h2 className="fifthSection_title">
        Subscribe or Follow us for latest updates
      </h2>
      <p className="fifthSection_first_p">
        Solution grid where technology meets artistic imagination
      </p>

      <div className="fifthSection_grid_div">
        <div className="fifthSection_first_flex_div">
          <div className="fifthSection_text_number_div">
            <p>Call Us Anytime</p>
            <div className="fifthSection_number_div">
              <img src={fifthSectionPhoto} alt="" /> <p>017XXXXXXXX</p>
            </div>
            <div className="fifthSection_number_div">
              <img src={fifthSectionPhoto} alt="" /> <p>017XXXXXXXX</p>
            </div>
            <div className="fifthSection_number_div">
              <div className="fifthSection_font_icon_div">
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
              <p>017XXXXXXXX</p>
            </div>
          </div>
          <div className="fifthSection_or_div">
            <div className="fifthSection_blank_div"></div>
            <p className="or">OR</p>
            <div className="fifthSection_blank_div"></div>
          </div>
        </div>
        <div className="fifthSection_input_div">
          <h3>Subscribe for newsletter</h3>
          <input
            className="input"
            type="name"
            name=""
            id=""
            placeholder="Name"
          />
          <input
            className="input"
            type="email"
            name=""
            id=""
            placeholder="Email"
          />
          <p className="fifthSection_checkbox_p">
            <input type="checkbox" name="" id="" /> Please click here if you
            would like to receive information about our services, products and
            exclusive offers through email. You can Unsubscribe at any time.
            Read our Privacy Policy
          </p>
          <div className="fifthSection_btn_flex_div">
            <Link>
              <button className="fifthSection_sub_btn">Subscribe</button>
            </Link>
            <div>
              <p>We respect your privacy</p>
              <p>We will never share your information.</p>
              <p>vPromise!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
