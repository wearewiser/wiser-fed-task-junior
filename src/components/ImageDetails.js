import React from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const ImageDetails = () => {
  //Get the state defined in the NavLink in Home.js
  let location = useLocation();

  if (location.values) {
    localStorage.setItem("title", location.values.title);
    localStorage.setItem("explanation", location.values.explanation);
    localStorage.setItem("image", location.values.image);
  }

  return (
    <>
      <div className="image-details-container">
        <div>
          <h1>{localStorage.title}</h1>
          <p>{localStorage.explanation}</p>
        </div>
        <div>
          <img src={localStorage.image} alt={localStorage.title} />
        </div>
      </div>
      <NavLink to="/">
        <button className="et-go-home">Back</button>
      </NavLink>
    </>
  );
};

export default ImageDetails;
