import React from "react";
import "./Travelblog.css";

const TravelBlog = ({
  pageTitle,
  locationDescription,
  image1,
  image2,
  image3,
}) => {
  return (
    <div className="travel-page">
      <div className="page-header">
        <h2 className="page-header-title">{pageTitle}</h2>
      </div>

      <div className="image-holder">
        <img src={image1} alt="Travel Page Left Image" />
        <img src={image2} alt="Travel Page Center Image" />
        <img src={image3} alt="Travel Page Right Image" />
      </div>

      <div className="footer-description">
        <p>{locationDescription}</p>
      </div>
    </div>
  );
};

export default TravelBlog;
