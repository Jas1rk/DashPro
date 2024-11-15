import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import ProfileImage from "/user.png";
import PdfExport from "./PdfExport";
import Search from "./Search";
import Mobilenavbar from "./Mobilenavbar";

const Navbar = ({ users, dailyData }) => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="bg-white shadow-md w-full fixed z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <h1 className="font-bold text-2xl text-blue-900">DashPro</h1>
        <div className="flex-grow max-w-full sm:max-w-sm md:max-w-md lg:mx-w-lg mx-4">
          <Search users={users} />
        </div>
        <div>
          <PdfExport users={users} dailyData={dailyData} />
        </div>

        <div className="hidden sm:flex items-center gap-3 md:gap-5">
          <FontAwesomeIcon icon={faBell} className="text-2xl cursor-pointer" />
          <img
            src={ProfileImage}
            alt="profile image"
            className="w-9 h-9 cursor-pointer rounded-full"
          />
        </div>
        <div className="sm:hidden">
          {!menu ? (
            <FontAwesomeIcon
              icon={faBars}
              className="text-2xl cursor-pointer"
              onClick={() => setMenu(true)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faXmark}
              className="text-2xl cursor-pointer"
              onClick={() => setMenu(false)}
            />
          )}
        </div>
      </nav>
      {menu && <Mobilenavbar />}
    </header>
  );
};

export default Navbar;
