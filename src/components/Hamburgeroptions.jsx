import React from "react";
import close from "../assets/close.png";
import { Link } from "react-router-dom";

const Hamburgeoptions = ({ setSignInBtn, setham }) => {
  function close() {
    setham(false);
  }

  function startLogin() {
    setham(false);
    setTimeout(() => {
      setSignInBtn(true);
    }, 0);
  }
  return (
    <div className="z-20 shadow-2xl fixed top-0 h-[100%] w-[70%] bg-white right-0">
      <div className="w-[100%] pt-10 px-10 mt-5 flex flex-col">
        <Link
          className="p-2 border m-2 text-center rounded cursor-pointer"
          onClick={startLogin}
        >
          Sign in
        </Link>

        <Link
          className="p-2 border m-2 text-center rounded cursor-pointer"
          onClick={close}
          to="/"
        >
          Home
        </Link>

        <Link
          className="p-2 border m-2 text-center rounded cursor-pointer"
          to="/help"
          onClick={close}
        >
          Help
        </Link>
        <Link
          className="p-2 border m-2 text-center rounded cursor-pointer"
          onClick={close}
          to="/checkout"
        >
          Cart
        </Link>

        <button
          className="p-2 border m-2 text-center rounded bg-red-50 cursor-pointer"
          onClick={close}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Hamburgeoptions;
