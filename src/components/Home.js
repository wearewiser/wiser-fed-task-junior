import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { get_youtube_thumbnail, randomDate } from "../utils/utils";

const Home = () => {
  //API Key from NASA
  const KEY = "drdTIdeIrH5m71FYXY6NpbV4w8wemerqnPaXrF0H";

  //Empty array to store the date and images in
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    [...Array(6)].forEach(() => {
      const date = randomDate(new Date(2012, 0, 1), new Date())
        .toISOString()
        .split("T")[0];
      axios({
        method: "get",
        url:
          "https://api.nasa.gov/planetary/apod?api_key=" +
          KEY +
          "&date=" +
          date,
      }).then(function (response) {
        setImageData((imageData) => imageData.concat(response));
      });
    });
  }, []);

  const renderedList = imageData.map((item) => {
    const bg = item.data.url.includes("youtube")
      ? get_youtube_thumbnail(item.data.url)
      : item.data.url;
    return (
      <NavLink
        to={{
          pathname: `images/${item.data.title.split(" ").join("-")}`,
          //Set the "values" to be able to pass through values to the ImageDetails component
          values: {
            title: item.data.title,
            explanation: item.data.explanation,
            image: bg,
          },
        }}
        key={item.data.title}
      >
        <div style={{ backgroundImage: `url(${bg})` }}>
          <p>{item.data.title}</p>
        </div>
      </NavLink>
    );
  });

  return (
    <div className="nasa-gallery">
      {imageData.length >= 6 ? renderedList : "Loading..."}
    </div>
  );
};

export default Home;
