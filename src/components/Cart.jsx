import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div>
        <button
          className="m-2 p-2 bg-black text-white rounded-lg"
          n
          onClick={handleClearCart}
        >
          clear cart
        </button>
        {cartItems.length === 0 && <h1>Cart is empty!</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
