import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center my-8 space-y-5 font-bold text-xl">
      <h2>ERROE, Page Not Found</h2>
      <p className="pb-2">
        Please Go Back To
        <Link
          to="/signin"
          className="bg-red-500 ml-2 text-white px-2 py-1 underline font-bold text-xl rounded-lg"
        >
          LogIn
        </Link>
      </p>
    </div>
  );
};

export default Error;
