import React from "react";
import "./SecondSection.css";
import secondSectionPhoto from "../../accets/secondSection/secondSectionPhoto.jpg";
const SecondSection = () => {
  return (
    <div className="secondSection_parent_div">
      <div className="secondSection_grid_div">
        <div>
          <img src={secondSectionPhoto} alt="" />
          <h2>Software & System Development</h2>
        </div>
        <div>
          <img src={secondSectionPhoto} alt="" />
          <h2>Ai Automation</h2>
        </div>
        <div>
          <img src={secondSectionPhoto} alt="" />
          <h2> Website Design & Development</h2>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
