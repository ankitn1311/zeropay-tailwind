import React from "react";
import DashboardSVG from "../svg/DashboardSVG";

const NavItem = ({ isActive, name, icon, ...others }) => {
  return (
    <div
      className={`flex flex-row justify-start items-center space-x-3 ml-10 mr-4 p-3 cursor-pointer ${
        isActive
          ? "text-purple-500  bg-gray-50 hover:bg-gray-100 rounded-md"
          : "text-gray-50 hover:text-purple-500"
      }`}
      {...others}
    >
      <i className="w-6 flex flex-row justify-center items-center">{icon}</i>
      <p className="font-bold text-sm">{name}</p>
    </div>
  );
};

export default NavItem;
