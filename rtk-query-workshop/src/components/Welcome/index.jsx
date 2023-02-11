import React from "react";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div className="h-96 flex justify-center items-center">
      <p className="text-2xl md:text-6xl font-semibold">
        Welcome to our <span className="text-indigo-700">Todo</span> App
        <div className=" text-center text-sm md:text-base mt-6 md:mt-12">
          <Link
            to="/signin"
            className="mr-4 border-indigo-700 border-2 rounded-md py-2 px-4"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="border-indigo-700 bg-indigo-700 text-white border-2 rounded-md py-2 px-4"
          >
            Signup
          </Link>
        </div>
      </p>
    </div>
  );
};

export default Welcome;
