import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import IMG_CDN_URL, { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantInfo(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    totalRatingsString,
    avgRating,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      {/* <img
        className="restaurant-img size-48"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="restaurant-logo"
      /> */}
      <h1 className="font-bold my-6 text-xl">{name}</h1>
      <p>
        {avgRating}({totalRatingsString}) | {costForTwoMessage}
      </p>
      <p className="font-bold text-lg">{cuisines.join(", ")}</p>

      {/* accordian */}
      {categories.map((category, index) => {
        return (
          // controlled component
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
