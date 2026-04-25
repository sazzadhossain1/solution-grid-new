import React from "react";
import "./SecondSection.css";
import secondSectionPhoto from "../../accets/secondSection/secondSectionPhoto.jpg";
const SecondSection = () => {
  return (
    <div className="secondSection_parent_div">
      <div className="secondSection_grid_div">
        <div>
          <h2>Software & System Development</h2>
          <img src={secondSectionPhoto} alt="" />
          <p>
            Let us help you with the software of your need. Be it a SAAS or for
            your company operation.
          </p>
        </div>
        <div>
          <h2>Ai Automation</h2>
          <img src={secondSectionPhoto} alt="" />
          <p>Have machine work for your business 24/7 uninterrupted.</p>
        </div>
        <div>
          <h2> Website Design & Development</h2>
          <img src={secondSectionPhoto} alt="" />
          <p>
            No pain with technical team, no budget issue. Let us give you the
            best with an affordable cost.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
