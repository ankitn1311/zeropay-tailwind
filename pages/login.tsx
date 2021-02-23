import React from "react";
import BaseLayout from "../components/common/BaseLayout";
import Navbar from "../components/common/Navbar/Navbar";

const Login = () => {
  return (
    <BaseLayout activeSideBarIndex={1}>
      <div className="w-full min-h-screen bg-pink-50 flex flex-col justify-center items-center">
        <div className="w-1/3 shadow-lg bg-pink-100 rounded-xl mx-auto  border flex flex-col">
          <form className="p-6 space-y-3" action="">
            <div className="">
              <label htmlFor="username" className="block text-lg">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-2 rounded-md focus:outline-none  border focus:border-pink-700"
                placeholder="Username..."
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-lg">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full  p-2 rounded-md focus:outline-none border focus:border-pink-700"
                placeholder="Password..."
              />
            </div>
            <div className="">
              <button
                type="button"
                className="bg-pink-500 py-2 px-4 uppercase tracking-wide focus:outline-none transform transition hover:-translate-y-0.5 border focus:border-pink-700 hover:bg-pink-400 active:bg-pink-600 active:translate-y-0 rounded-md "
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Login;
