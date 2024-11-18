import React from "react";
import IMG_CDN_URL from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData} = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    sla,
    costForTwo,
    avgRating,
  } = resData?.info;

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
      <h4>Delivery time: {sla?.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
