import React from "react";
import "./WebsiteDesign.css";

const WebsiteDesign = () => {
  // For Safari
  document.body.scrollTop = 0;
  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;
  return (
    <div className="websiteDesign_parent_div">
      <p>
        Website Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Accusantium atque repellendus magnam iusto cum harum dicta numquam neque
        dolore. Magni esse aut neque eum. Nobis esse numquam fugit ipsa nostrum.
      </p>
    </div>
  );
};

export default WebsiteDesign;
