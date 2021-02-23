import React from "react";

import BaseLayout from "../components/common/BaseLayout";
import CalendarSVG from "../components/common/svg/CalendarSVG";
import ChevronDownSVG from "../components/common/svg/ChevronDownSVG";
import DotsVerticalSVG from "../components/common/svg/DotsVerticalSVG";
import LocationSVG from "../components/common/svg/LocationSVG";
import MailSVG from "../components/common/svg/MailSVG";
import PhoneSVG from "../components/common/svg/PhoneSVG";
import SettingsSVG from "../components/common/svg/SettingsSVG";
import UpArrowSVG from "../components/common/svg/UpArrowSVG";

const DashBoard = () => {
  return (
    <BaseLayout activeSideBarIndex={0}>
      <div className="bg-gray-100 w-full flex-1 flex flex-col p-10 ">
        <h5 className="text-black text-md font-bold">Zeropay</h5>
        <p className="text-xs text-gray-400 font-semibold mt-2">
          <span className="text-blue-900 font-bold">Sunday</span>, 18 January
          2020
        </p>
        <h1 className="text-3xl font-bold mt-14">Payments</h1>
        <div className="flex flex-row justify-between items-center mt-2">
          <h4 className="text-lg">History</h4>
          <div className="bg-white p-2 rounded-lg flex flex-row items-center space-x-2">
            <i>
              <CalendarSVG />
            </i>
            <p className="">Jan - Feb 2020</p>
            <i className="">
              <ChevronDownSVG className="mx-3" />
            </i>
          </div>
        </div>
        <div className="bg-white py-4 px-6 mt-6 rounded-xl flex flex-row items-center justify-between shadow-xs">
          <div className="bg-red-400 rounded-lg p-2 w-10 h-10 text-center flex-0">
            AA
          </div>
          <p className="w-44 ">Aradhaya Anand</p>
          <div className="rounded-full py-1 text-center w-24 text-gray-50 bg-purple-500 text-sm ">
            Pending
          </div>
          <p>Aug 13, 2020</p>
          <p>&#8377;5500</p>
          <div className="flex flex-row items-center justify-center space-x-2">
            <div className="rounded-lg bg-gray-100 p-3">
              <i>
                <UpArrowSVG />
              </i>
            </div>
            <i className="hover:bg-gray-100 p-2 rounded-md">
              <DotsVerticalSVG />
            </i>
          </div>
        </div>
        <div className="bg-white py-4 px-6 mt-6 rounded-xl flex flex-row items-center justify-between shadow-xs">
          <div className="bg-purple-300 rounded-lg p-2 w-10 h-10 text-center">
            SJ
          </div>
          <p className="w-44">Supriya Jha</p>
          <div className="rounded-full py-1 text-center w-24 text-gray-50 bg-green-500 text-sm ">
            Completed
          </div>
          <p>Aug 13, 2020</p>
          <p>&#8377;5500</p>
          <div className="flex flex-row items-center justify-center space-x-2">
            <div className="rounded-lg bg-gray-100 p-3">
              <i>
                <UpArrowSVG />
              </i>
            </div>
            <i className="hover:bg-gray-100 p-2 rounded-md">
              <DotsVerticalSVG />
            </i>
          </div>
        </div>
      </div>
      <div className="bg-white w-96 p-14 space-y-10">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-gray-800 font-bold text-lg">Profile</h2>
            <p className="text-xs text-purple-600 font-bold">
              Vendor Information
            </p>
          </div>
          <i className="hover:bg-gray-200 p-2 rounded-full">
            <SettingsSVG />
          </i>
        </div>
        <div className="flex flex-col justify-center items-center space-y-10">
          <img
            src="images/zeropaychar.jpeg"
            className="object-cover rounded-full w-32 h-32 border-purple-600 border-4"
            alt="display-image"
          />
          <div className="flex flex-col justify-center items-center space-y-2">
            <h2 className="text-gray-800 font-bold text-lg">Ashwin Prasad</h2>
            <p className="text-gray-400 font-bold text-sm">Prasad Fashion</p>
          </div>
        </div>
        <div className="">
          <h2 className="text-gray-800 font-bold text-lg">Information</h2>
        </div>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-row justify-start items-start space-x-2">
            <i>
              <LocationSVG />
            </i>
            <div className="flex flex-col items-start space-y-2">
              <h5 className="text-gray-400 text-lg">Address</h5>
              <h6 className="text-gray-800 text-lg">
                795 MG Road, South Bangalore 600,
                <br />
                <span className="font-bold"> BANG 914107</span>
              </h6>
            </div>
          </div>
          <div className="flex flex-row justify-start items-start space-x-2">
            <i>
              <PhoneSVG />
            </i>
            <div className="flex flex-col items-start space-y-2 text-lg">
              <h5 className="text-gray-400">Phone</h5>
              <h6 className="text-gray-800 font-bold">+91 8525512366</h6>
            </div>
          </div>
          <div className="flex flex-row justify-start items-start space-x-2">
            <i>
              <MailSVG />
            </i>
            <div className="flex flex-col items-start space-y-2  text-lg">
              <h5 className="text-gray-400">Address</h5>
              <h6 className="text-gray-800 font-bold">ashwinx@gmail.com</h6>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default DashBoard;
