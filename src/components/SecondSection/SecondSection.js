import React from "react";
import "./SecondSection.css";

import software from "../../accets/secondSection/Software.jpg";
import aiAutomation from "../../accets/secondSection/aiAutomation.jpg";
import websiteDesign from "../../accets/secondSection/websiteDesign.jpg";
const SecondSection = () => {
  return (
    <div className="secondSection_parent_div">
      <div className="secondSection_grid_div">
        <div>
          <h2>Software & System Development</h2>
          <img className="secondSection_common_photo" src={software} alt="" />
          <p>
            Let us help you with the software of your need. Be it a SAAS or for
            your company operation.
          </p>
        </div>
        <div>
          <h2>Ai Automation</h2>
          <img
            className="secondSection_common_photo"
            src={aiAutomation}
            alt=""
          />
          <p>Have machine work for your business 24/7 uninterrupted.</p>
        </div>
        <div>
          <h2> Website Design & Development</h2>
          <img
            className="secondSection_common_photo"
            src={websiteDesign}
            alt=""
          />
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
