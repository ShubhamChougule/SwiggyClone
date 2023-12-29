import React from "react";

import close from "../assets/close.png";

const SignIn = ({ signInBtn, setSignInBtn }) => {
  return (
    <div className="z-20 ease-in duration-1000 shadow-2xl fixed top-0 h-[100%] w-[90%] md:w-[50%] lg:w-[30%] bg-white left-auto right-0">
      <div className="w-[100%] pt-3 px-5 mt-5">
        <img
          src={close}
          onClick={() => {
            setSignInBtn(!signInBtn);
          }}
          className=" cursor-pointer w-4 h-4 mb-6"
        />
        <h1 className="text-2xl text-black font-medium">Login</h1>
        <h2 className="text-md">
          or <a className="text-orange-600 cursor-pointer">create an account</a>
        </h2>

        <input
          placeholder="Phone number"
          required
          className="px-2 py-4 mt-4 border w-[100%] ease-in duration-300 type"
        />

        <button className="w-[100%] mt-5 text-white bg-orange-600 px-2 py-4">
          LOGIN
        </button>

        <p className="mt-2 text-sm">
          By clicking on Login, I accept the Terms & Conditions & Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default SignIn;
