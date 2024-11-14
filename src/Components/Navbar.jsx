import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBars } from "@fortawesome/free-solid-svg-icons";
import ProfileImage from "/user.png";
import PdfExport from "./PdfExport";
import Sidebar from "./Sidebar";

const Navbar = ({ users, dailyData }) => {
  return (
    <header className="bg-white shadow-md w-full fixed z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <h1 className="font-bold text-2xl text-blue-900">DashPro</h1>
        <div className="flex-grow max-w-full sm:max-w-sm md:max-w-md lg:mx-w-lg mx-4">
          <input
            type="search"
            placeholder="search items..."
            className="w-full p-2 rounded-md bg-white-700 border text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-blue-600"
          />
        </div>
        {/* <div>
          <PdfExport users={users} dailyData={dailyData} />
        </div> */}

        <div className="hidden sm:flex items-center gap-3 md:gap-5">
          <FontAwesomeIcon icon={faBell} className="text-2xl cursor-pointer" />
          <img
            src={ProfileImage}
            alt="profile image"
            className="w-9 h-9 cursor-pointer rounded-full"
          />
        </div>
        <div className="sm:hidden">
          <FontAwesomeIcon icon={faBars} className="text-2xl cursor-pointer" />
        </div>
      </nav>
    
    </header>
  );
};

export default Navbar;
