import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-slate-800 h-40">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <p className="text-white">
          Made with{" "}
          <span className="text-red-600 animate-pulse text-xl">❤</span>
        </p>
        <p className="text-white text-xl">
          Made by
          <a
            className="text-orange-500 underline "
            href="https://www.linkedin.com/in/shubham5545/"
          >
            {" "}
            Shubham
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
