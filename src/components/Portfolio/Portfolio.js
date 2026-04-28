import React from "react";
import "./Portfolio.css";

import one from "../../accets/portfolioPhoto/1.jpg";
import two from "../../accets/portfolioPhoto/2.jpg";
import three from "../../accets/portfolioPhoto/3.jpg";
import four from "../../accets/portfolioPhoto/4.jpg";
import five from "../../accets/portfolioPhoto/5.jpg";
import six from "../../accets/portfolioPhoto/6.jpg";
import saven from "../../accets/portfolioPhoto/7.jpg";
import eight from "../../accets/portfolioPhoto/8.jpg";
import nine from "../../accets/portfolioPhoto/9.png";
import ten from "../../accets/portfolioPhoto/10.png";
import elaven from "../../accets/portfolioPhoto/11.png";
const Portfolio = () => {
  return (
    <div className="portfolioInnrePage_parent_div">
      <h1>Portfolio</h1>

      <div className="portfolioInnerPage_grid_div">
        <div>
          <img src={four} alt="" />
        </div>
        <div>
          <img src={six} alt="" />
        </div>
        <div>
          <img src={saven} alt="" />
        </div>
        <div>
          <img src={three} alt="" />
        </div>
        <div>
          <img src={five} alt="" />
        </div>

        <div>
          <img src={one} alt="" />
        </div>
        <div>
          <img src={two} alt="" />
        </div>

        <div>
          <img src={eight} alt="" />
        </div>
        <div>
          <img src={nine} alt="" />
        </div>
        <div>
          <img src={ten} alt="" />
        </div>
        <div>
          <img src={elaven} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
