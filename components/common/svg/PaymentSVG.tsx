import React from "react";

const PaymentSVG = ({ isActive }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.432 21L6.896 13.08V12.024H7.424C8.704 12.024 9.68 11.84 10.352 11.472C11.04 11.104 11.44 10.44 11.552 9.48H6.896V7.944H11.528C11.368 7.048 10.944 6.4 10.256 6C9.584 5.6 8.64 5.4 7.424 5.4H6.896V3.864H16.832V5.4H12.296C13.064 6.024 13.52 6.872 13.664 7.944H16.832V9.48H13.712C13.6 10.648 13.152 11.56 12.368 12.216C11.6 12.856 10.576 13.264 9.296 13.44L13.88 21H11.432Z"
        fill={isActive ? "rgba(139, 92, 246)" : "white"}
      />
    </svg>
  );
};

export default PaymentSVG;
