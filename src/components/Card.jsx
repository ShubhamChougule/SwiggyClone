import React from "react";
import rating from "../assets/rating.png";
import delivery from "../assets/delivery.png";

const Card = (props) => {
  return (
    <div>
      <div className="card w-[330px] my-2 lg:my-5 mx-5">
        <div className="">
          <img
            className="object-cover h-56 w-full rounded-3xl hover:scale-95  cursor-pointer"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              props.props.cloudinaryImageId
            }
          />
        </div>

        <div className="py-3 px-5 text-base lg:text-xl">
          <p className="about font-semibold truncate">{props.props.name}</p>
        </div>

        <div className="pb-3 px-5 flex gap-4">
          <div className="likes flex items-center gap-2">
            <img className="w-5 h-5" src={rating}></img>
            <p className="text-slate-600 text-sm lg:text-base font-semibold">
              {props.props.avgRating}
            </p>
            <img className="w-5 h-5" src={delivery}></img>
            <p className="text-slate-600   text-sm lg:text-base font-semibold">
              {props.props.sla.slaString}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
