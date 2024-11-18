import React from "react";
import IMG_CDN_URL from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  // lastMileTravelString,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
        <h4>Rating: {avgRating} stars</h4>
        {/* <h4>{lastMileTravelString}</h4> */}
        <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
