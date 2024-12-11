import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* accordian  */}
      <div
        className="w-6/12 bg-gray-100 shadow-lg p-4 my-4 mx-auto cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data?.title.slice(0,40)}({data?.itemCards?.length})
        </span>
        <span>{showItems ? "🔼" : "🔽"}</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
