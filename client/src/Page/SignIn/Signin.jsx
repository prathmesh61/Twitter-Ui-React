import React from "react";

const Signin = () => {
  return (
    <form className="bg-gray-200 flex  flex-col px-8 py-12 w-8/12 md:w-6/12 mx-auto gap-10 rounded-lg">
      <h2 className="text-3xl font-bold text-center">SignIn To Twitter</h2>
      <input
        type="username"
        placeholder="username"
        className=" text-xl rounded-full px-4 py-2  outline-none"
      />
      <input
        type="password"
        placeholder="password"
        className=" text-xl bg-gray-100 p-2 rounded-full outline-none"
      />
      <input
        type="Email"
        placeholder="Email"
        className=" text-xl bg-gray-100 p-2 rounded-full outline-none"
      />
      <button
        className="bg-blue-500 text-white p-2 text-xl px-4 py-2  rounded-full"
        type="submit"
      >
        SignIn
      </button>

      <p className="text-center text-xl">Don't have an account?</p>

      <input
        type="username"
        placeholder="username"
        className=" text-xl rounded-full px-4 py-2  outline-none"
      />
      <input
        type="Email"
        placeholder="Email"
        className="text-xl bg-gray-100 p-2 rounded-full outline-none"
        required
      />
      <input
        type="password"
        placeholder="password"
        className=" text-xl bg-gray-100 p-2 rounded-full  outline-none"
      />

      <button
        className="bg-blue-500 text-white p-2 text-xl px-4 py-2  rounded-full"
        type="submit"
      >
        SignUp{" "}
      </button>
    </form>
  );
};

export default Signin;
