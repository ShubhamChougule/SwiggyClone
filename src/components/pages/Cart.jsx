import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col my-28">
        <div className="w-80 h-80 p-7 pb-0">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" />
        </div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-black text-xl font-medium">Your cart is empty</h1>
          <h3 className="text-black text-sm">
            You can go to home page to view more restaurants
          </h3>
          <Link
            to="/"
            className="bg-orange-500 font-medium text-white py-3 px-4 m-10"
          >
            SEE RESTAURANTS NEAR YOU
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
