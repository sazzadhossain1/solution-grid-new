import React from "react";
import "./GraphicDesign.css";

const GraphicDesign = () => {
  // For Safari
  document.body.scrollTop = 0;
  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;
  return (
    <div className="graphicDesign_parent_div">
      <p>
        Graphic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
        dolores quo unde consequatur voluptates ipsum, hic facere at ad quasi
        aliquam? Nobis debitis rem soluta atque molestiae qui iusto placeat.
      </p>
    </div>
  );
};

export default GraphicDesign;
