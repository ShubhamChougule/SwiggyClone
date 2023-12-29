import React, { useEffect, useState } from "react";
import { arr } from "../components/FetchedData";
import Card from "./Card";
import ShimmerCard from "./ShimmerCard";

const Hero = () => {
  const [data, setData] = useState([]);
  const [sortbyrating, setSortbyrating] = useState(true);
  const [sortbydeltime, setSortbydeltime] = useState(true);
  const [search, setSearch] = useState("");
  const [shimmer, setShimmer] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShimmer(false);
    }, 1500);
    setData(arr);
  }, []);

  function sortdata() {
    let sorted;
    if (sortbyrating) {
      sorted = [...data].sort((a, b) => b.info.avgRating - a.info.avgRating);
    } else {
      sorted = [...data].sort((a, b) => a.info.avgRating - b.info.avgRating);
    }

    setSortbyrating(!sortbyrating);

    setData(sorted);
  }

  function latestdata() {
    setData(arr);
  }

  function fastDelsort() {
    let sorted;
    if (sortbydeltime) {
      sorted = [...data].sort(
        (a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime
      );
    } else {
      sorted = [...data].sort(
        (a, b) => b.info.sla.deliveryTime - a.info.sla.deliveryTime
      );
    }

    setSortbydeltime(!sortbydeltime);

    setData(sorted);
  }

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <div className="px-5 lg:px-[100px]">
        <div className="py-4">
          <h1 className="text-[20px] text-center lg:text-[25px] lg:text-left font-semibold text-black">
            Restaurants with online food delivery in Mumbai
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
          <button
            className="bg-green-600 hover:bg-green-400 py-2 px-4 rounded-full text-white text-[12px] lg:text-base"
            onClick={sortdata}
          >
            Highly Rated 📈
          </button>
          <button
            className="bg-orange-600 hover:bg-orange-400 py-2 px-4 rounded-full text-white text-[12px] lg:text-base"
            onClick={fastDelsort}
          >
            Fast Delivery ⚡
          </button>

          <button
            className="bg-rose-600 hover:bg-rose-400 py-2 px-4 rounded-full text-white text-[12px] lg:text-base"
            onClick={latestdata}
          >
            New 🔥
          </button>

          <input
            placeholder="Search for restaurants and food"
            className="border border-slate-500  rounded-xl text-[12px] lg:text-base py-2 px-4 w-full mx-3"
            onChange={handleSearchChange}
          />
        </div>

        <div className="cardContainer py-5 flex flex-wrap justify-center items-center">
          {shimmer
            ? data.map(() => <ShimmerCard />)
            : data
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.info.name
                        .toLowerCase()
                        .includes(search.toLowerCase());
                })
                .map((item) => <Card props={item.info} key={item.info.id} />)}
        </div>
      </div>
    </div>
  );
};

export default Hero;
