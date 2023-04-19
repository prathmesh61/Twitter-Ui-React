import React from "react";
import { Link } from "react-router-dom";
import { SearchIcon, StartIcon } from "../../Icon/Icon";
import TweeterLogo from "../../assects/twitterlogo.png";
const Navbar = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 my-5 justify-center">
      <div className="mx-auto md:mx-0">
        <h2 className="ml-8 font-bold text-2xl">
          <Link to="/">
            <img src={TweeterLogo} alt="" className="w-12 h-12" />
          </Link>
        </h2>
      </div>

      <div className="col-span-2  md:border-slate-200 md:px-6 my-6 md:my-0">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Home</h2>
          <StartIcon />
        </div>
      </div>

      <div className="px-0 md:px-6 mx-auto">
        <SearchIcon />

        <input
          type="text"
          className="bg-blue-100 rounded-full py-2 px-8 outline-none"
        />
      </div>
    </div>
  );
};

export default Navbar;
