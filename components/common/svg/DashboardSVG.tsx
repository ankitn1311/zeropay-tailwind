import React from "react";

const DashboardSVG = ({ isActive }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="4"
        width="6.22222"
        height="6.22222"
        stroke={isActive ? "rgba(139, 92, 246)" : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="13.7778"
        y="4"
        width="6.22222"
        height="6.22222"
        stroke={isActive ? "rgba(139, 92, 246)" : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="13.7778"
        y="13.7778"
        width="6.22222"
        height="6.22222"
        stroke={isActive ? "rgba(139, 92, 246)" : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="4"
        y="13.7778"
        width="6.22222"
        height="6.22222"
        stroke={isActive ? "rgba(139, 92, 246)" : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DashboardSVG;
