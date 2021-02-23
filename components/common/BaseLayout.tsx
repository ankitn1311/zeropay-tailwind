import React from "react";
import Navbar from "./Navbar/Navbar";

const BaseLayout = ({ activeSideBarIndex, children }) => {
  return (
    <div className="flex flex-row">
      <Navbar activeIndex={activeSideBarIndex} />
      {children}
    </div>
  );
};

export default BaseLayout;
