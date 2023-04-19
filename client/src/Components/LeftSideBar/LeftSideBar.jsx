import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon, ProfileIcon, TagIcon } from "../../Icon/Icon";

const LeftSideBar = () => {
  return (
    <div className="flex flex-col h-full md:h-[90vh] justify-between mr-6">
      <div className="flex mt-6 flex-col space-y-6">
        <Link to="/">
          <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full">
            <HomeIcon className="text-2xl" />
            <p>Home</p>
          </div>
        </Link>
        <Link to="/explore">
          <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full">
            <TagIcon className="text-2xl" />
            <p>Explore</p>
          </div>
        </Link>
        <Link to="/profile/:id">
          <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full">
            <ProfileIcon className="text-2xl" />
            <p>Profile</p>
          </div>
        </Link>
      </div>

      <div className="flex justify-center">
        <div className="">
          <p className="font-bold">Username</p>
          <p className="font-bold">@Username</p>
        </div>
        <div className="">
          <Link to="signin">
            <button className="bg-red-500 text-white px-4 py-2 rounded-full text-xs">
              LouOut
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
