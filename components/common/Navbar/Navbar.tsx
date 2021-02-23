import React, { useEffect, useState } from "react";
import Link from "next/link";

import NavItem from "./NavItem";
import DashboardSVG from "../svg/DashboardSVG";
import LogoSVG from "../svg/LogoSVG";
import PaymentSVG from "../svg/PaymentSVG";
import ReportsSVG from "../svg/ReportsSVG";

const Navbar = ({ activeIndex }) => {
  const [activeSideBarIndex, setActiveSideBarIndex] = useState<number>(0);

  useEffect(() => {
    console.log(activeIndex, activeSideBarIndex);
    setActiveSideBarIndex(activeIndex);
  }, [activeSideBarIndex]);

  const sideBarLabels = [
    { label: "Dashboard", icon: DashboardSVG, href: "/dashboard" },
    { label: "Payments", icon: PaymentSVG, href: "/login" },
    { label: "Analytics", icon: ReportsSVG, href: "/" },
  ];

  return (
    <div
      className="w-60 min-h-screen flex-none"
      style={{
        backgroundImage: "linear-gradient(45deg, #2EA985 0%, #1FE07D 100%)",
      }}
    >
      <div className="flex flex-col text-gray-50">
        <div className="flex flex-row p-10 justify-center items-center space-x-2">
          <LogoSVG />
          <h2 className="text-lg uppercase font-semibold tracking-widest">
            Zeropay
          </h2>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <p className="text-2xl font-semibold">Hello Ashwin!</p>
          <p className="text-sm font-medium">Check Your Last Transaction!</p>
        </div>
      </div>
      <div className="my-14 space-y-5 ">
        {sideBarLabels.map((item, index) => (
          <Link href={item.href}>
            <NavItem
              isActive={activeSideBarIndex === index}
              name={item.label}
              icon={<item.icon isActive={activeSideBarIndex === index} />}
              onClick={() => setActiveSideBarIndex(index)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
