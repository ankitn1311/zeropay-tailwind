import React from "react";

const ReportsSVG = ({ isActive }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.24 4.64014H16.9467C17.8892 4.64014 18.6533 5.40424 18.6533 6.3468V18.2935C18.6533 19.236 17.8892 20.0001 16.9467 20.0001H6.70667C5.7641 20.0001 5 19.236 5 18.2935V6.3468C5 5.40424 5.7641 4.64014 6.70667 4.64014H8.41333"
        stroke={isActive ? "rgba(139, 92, 246)" : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="9.69336"
        y="4.21338"
        width="4.26667"
        height="2.13333"
        rx="0.853333"
        stroke={isActive ? "rgba(139, 92, 246)" : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ReportsSVG;
