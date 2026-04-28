import React from "react";
import "./ForthSection.css";
import aboutUs from "../../accets/forthSection/aboutUs.jpg";

const ForthSection = () => {
  return (
    <div id="about" className="forthSection_parent_div">
      <div className="forthSection_text_div">
        <h2>About Us</h2>
        <p>
          We are a group of passionate professionals who always adopt
          result-oriented and innovative techniques to the core that help in
          enhancing your business through information technology.
        </p>
        <p>
          We are best known for quality Software Development, App Development,
          Website Design & Development, Graphic Design, Video Editing as well as
          Digital Marketing Services along with Search Engine Optimization.
        </p>
        <p>
          We know that your growth is our growth. So we dedicate ourselves to
          your growth.
        </p>
      </div>
      <div>
        <img className="forthSection_aboutUs_photo" src={aboutUs} alt="" />
      </div>
    </div>
  );
};

export default ForthSection;
