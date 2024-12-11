import React from "react";
import IMG_CDN_URL from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="w-6/12 mx-auto m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className=" py-2">
              <span className="">{item?.card?.info?.name}</span>
              <span>
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="px-2 py-1 mx-11 my-28 shadow-lg bg-black text-white rounded-md"
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            </div>
            <img
              src={IMG_CDN_URL + item.card.info.imageId}
              alt="item-image"
              className="w-full rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
