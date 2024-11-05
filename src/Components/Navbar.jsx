import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBars } from "@fortawesome/free-solid-svg-icons";
import ProfileImage from "/user.png";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md p-3  flex justify-between items-center z-50">
      <h1 className="font-medium text-lg">DashPro</h1>

      <input
        type="search"
        placeholder="search users..."
        className="p-2 w-[15rem] sm:w-[25rem] md:w-[30rem] lg:w-[50rem] rounded-lg border outline-none outline-offset-0 focus:outline-cyan-600"
      />

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
    </header>
  );
};

export default Navbar;
