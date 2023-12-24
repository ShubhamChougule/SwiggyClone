import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <nav className="px-3 lg:px-10 py-3 flex justify-between lg:justify-between shadow-lg">
        <div className=" flex justify-center items-center lg:flex">
          <img src={logo} className="h-12 lg:h-16" />
        </div>
        <div className="flex items-center justify-center gap-3">
          <button className="font-medium px-3 py-2 hidden lg:block">
            Cart
          </button>
          <button className="font-medium px-3 py-2 hidden lg:block">
            Offers
          </button>
          <button className="font-medium border rounded-full px-7 py-2 hover:border-red-500 bg-orange-400 text-white">
            Sign in
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
