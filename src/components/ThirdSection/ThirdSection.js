import React from "react";
import "./ThirdSection.css";
import thirdSectionPhoto from "../../accets/thirdSection/thirdSectionPhoto.jpg";
import { Link } from "react-router-dom";
const ThirdSection = () => {
  return (
    <div className="thirdSection_parent_div">
      <img src={thirdSectionPhoto} alt="" />
      <div className="thirdSection_text_div">
        <h2>Professional IT Services Portal</h2>
        <p className="thirdSection_first_p">
          Where technology meets artistic imagination
        </p>
        <p className="thirdSection_second_p">
          We understand unique IT business needs and our team of experts is
          ready to provide high-quality solutions customised to each customer in
          the most cost-effective way possible with the highest quality
          standards
        </p>
        <p className="thirdSection_third_p">
          At Solution grid, we follow and adhere to the following international
          quality standards and requirements to deliver your desired services in
          a cost-effective and timely manner:
        </p>
        <ul>
          <li>ISO-9001 to meet customer quality expectations</li>
          <li>
            ISO-14001 to work in an environmentally-friendly and sustainable way
          </li>
          <li>
            ISO-27001 to keep your sensitive information assets safe and secure
          </li>
          <li>
            ISO/IEC/IEEE-29119 for high-quality approach to software testing
          </li>
          <li>
            Statutory HSE regulations and standards to keep our colleagues and
            wider public safe of harm’s way
          </li>
        </ul>
        <Link>
          <button>Book a Free Consultation</button>
        </Link>
      </div>
    </div>
  );
};

export default ThirdSection;
