import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import ProfileImage from "/user.png";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md p-3   flex justify-between items-center ">
      <h1 className="font-medium text-lg ">DashPro</h1>
      <div className="flex-1 flex justify-center">
        <input
          type="search"
          placeholder="Search users..."
          className="p-2 w-[10rem]  sm:w-[20rem] md:[w-25rem] lg:w-[50rem] rounded-lg border outline-offset-0 outline-cyan-600"
        />
      </div>
      <div className="flex items-center gap-3 md:gap-5 md:order-none">
        <FontAwesomeIcon icon={faBell} className="text-2xl cursor-pointer" />
        <img
          src={ProfileImage}
          alt="profile image"
          className="w-9 h-9 cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Navbar;
