import React from "react";
import "./Portfolio.css";

import four from "../../accets/portfolioPhoto/4.jpg";

import six from "../../accets/portfolioPhoto/6.jpg";
import saven from "../../accets/portfolioPhoto/7.jpg";

import twelve from "../../accets/portfolioPhoto/12.jpg";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="portfolio_parent_div">
      <h1>Portfolio</h1>

      <div className="portfolio_grid_div">
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
          <img src={twelve} alt="" />
        </div>
      </div>
      <Link to="/portfolioInnerPage">
        <button>See More</button>
      </Link>
    </div>
  );
};

export default Portfolio;
