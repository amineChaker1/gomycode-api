import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="flex justify-between items-center py-5 px-2 sm:px-10 lg:px-20 border-b-2 border-indigo-700">
        <div>
          <p class="text-3xl uppercase font-bold">
            To<span class="text-indigo-700">Do</span>
          </p>
        </div>
        <ul class="flex font-semibold">
          <li class="mr-2 md:mr-6">
            <Link to="/">Home</Link>
          </li>
          <li class="mr-2 md:mr-6">
            <Link to="/signin">Login</Link>
          </li>
          <li class="mr-2 md:mr-6">
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
