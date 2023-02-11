import React from "react";

const SignIn = () => {
  return (
    <div className="text-center border-indigo-700 border-2 rounded-lg p-4 pb-6 mx-10 md:mx-36">
      <form className="flex flex-col gap-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="border-indigo-700 border-2 rounded-md"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="border-indigo-700 border-2 rounded-md"
        />
        <button
          type="submit"
          className="bg-indigo-700 text-white p-2 rounded-full "
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
