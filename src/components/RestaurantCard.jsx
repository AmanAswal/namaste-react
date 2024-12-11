import React, { useContext } from "react";
import IMG_CDN_URL from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const {resData} = props;

  const {loggedInUser} = useContext(UserContext);

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
    <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:shadow-lg hover:bg-gray-300">
      <img
        className="rounded-lg"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <h4>Rating: {avgRating} stars</h4>
      <h4>Delivery time: {sla?.slaString}</h4>
      <h4>{costForTwo}</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};


// high order component.
// a function which takes an component and returs a new component;
// input - RestaurantCard => RestaurantCardPromoted

export const withHighRating = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-pink-300 text-black m-2 p-2 rounded-lg">High Rating</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;
