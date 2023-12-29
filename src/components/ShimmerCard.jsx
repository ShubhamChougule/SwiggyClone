import React from "react";

const ShimmerCard = () => {
  return (
    <div>
      <div className="card w-[330px] my-2 lg:my-5 mx-5">
        <div className="h-56 w-full rounded-3xl bg-gray-300 animate-pulse"></div>

        <div className="mt-2 h-7 text-base lg:text-xl bg-gray-300"></div>
        <div className="mt-2 h-7 text-base lg:text-xl bg-gray-200"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
