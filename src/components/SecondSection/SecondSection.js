import React from "react";
import "./SecondSection.css";
import secondSectionPhoto from "../../accets/secondSection/secondSectionPhoto.jpg";
const SecondSection = () => {
  return (
    <div className="secondSection_parent_div">
      <div className="secondSection_grid_div">
        <div>
          <img src={secondSectionPhoto} alt="" />
          <h2>DIGITAL MARKETING</h2>
        </div>
        <div>
          <img src={secondSectionPhoto} alt="" />
          <h2>ECOMMERCE</h2>
        </div>
        <div>
          <img src={secondSectionPhoto} alt="" />
          <h2>MOBILE APPS</h2>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
