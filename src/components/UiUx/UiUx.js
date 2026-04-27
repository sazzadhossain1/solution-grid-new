import React from "react";
import "./UiUx.css";

const UiUx = () => {
  // For Safari
  document.body.scrollTop = 0;
  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;
  return (
    <div className="uiUx_parent_div">
      <p>
        Ui/Ux Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        corrupti quidem obcaecati doloremque eos recusandae delectus tempora
        sit. Explicabo distinctio delectus odio recusandae provident ipsam velit
        ut debitis ex minus.
      </p>
    </div>
  );
};

export default UiUx;
