import React from "react";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";
import MainTweet from "../../Components/MainTweet/MainTweet";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="px-6">
        <LeftSideBar />
      </div>
      <div className="col-span-2 border-x-2 border-t-slate-700 px-6">
        <MainTweet />
      </div>
      <div className="px-6">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
