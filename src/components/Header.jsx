import React, { useState } from "react";
import logo from "../assets/logo.png";
import SignIn from "./SignIn";
import { Link } from "react-router-dom";
import hamburger from "../assets/hamburger.png";
import Hamburgeoptions from "./Hamburgeroptions";

const Header = () => {
  const [signInBtn, setSignInBtn] = useState(false);
  const [ham, setham] = useState(false);

  function ToggleSignBtn() {
    setSignInBtn(!signInBtn);
  }

  function toggelHam() {
    setham(!ham);
  }

  return (
    <div>
      <nav className="px-3 lg:px-10 py-3 flex justify-between lg:justify-between shadow-lg">
        <div className=" flex justify-center items-center lg:flex">
          <Link to="/">
            <img src={logo} className="h-10 lg:h-14" />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-3">
          <img
            src={hamburger}
            onClick={toggelHam}
            className="lg:hidden h-7 lg:h-10 px-3 cursor-pointer ease-in duration-500"
          />

          <Link
            className="font-medium px-3 py-2 hidden lg:block cursor-pointer"
            to="/help"
          >
            Help
          </Link>

          <Link
            className="font-medium px-3 py-2 hidden lg:block cursor-pointer"
            to="/checkout"
          >
            Cart
          </Link>
          <a
            onClick={ToggleSignBtn}
            className="font-medium border hidden lg:block rounded-full px-3 py-1 text-sm  lg:text-base lg:px-5 lg:py-2 hover:border-red-500 cursor-pointer bg-orange-400 text-white"
          >
            Sign in
          </a>
        </div>

        {signInBtn && (
          <SignIn signInBtn={signInBtn} setSignInBtn={setSignInBtn} />
        )}

        {ham && <Hamburgeoptions setSignInBtn={setSignInBtn} setham={setham} />}
      </nav>
    </div>
  );
};

export default Header;
