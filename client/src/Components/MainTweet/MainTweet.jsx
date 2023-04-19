import React from "react";

const MainTweet = () => {
  return (
    <div className="">
      <p className="font-bold pl-2 my-2">Username</p>
      <form className="pb-6 border-b-2">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          type="text"
          placeholder="What's happening?"
          maxLength={280}
          className="bg-slate-200 rounded-lg p-2 w-full outline-none"
        ></textarea>
        <button className="bg-blue-500 text-white rounded-lg py-1 px-4 ml-auto cursor-pointer">
          Tweet
        </button>
      </form>
    </div>
  );
};

export default MainTweet;
