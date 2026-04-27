import React from "react";
import "./ContentDevelopment.css";

const ContentDevelopment = () => {
  // For Safari
  document.body.scrollTop = 0;
  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;
  return (
    <div className="content_parent_div">
      <p>
        Content Development Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Delectus praesentium, voluptate incidunt fuga a officia nesciunt
        dolorum molestias laborum ratione dolores ea repellat aspernatur, fugiat
        autem? Iure cupiditate architecto temporibus.
      </p>
    </div>
  );
};

export default ContentDevelopment;
