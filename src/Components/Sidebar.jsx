import React from "react";
import {
  faCaretSquareRight,
  faCashRegister,
  faDashboard,
  faProcedures,
  faUmbrella,
  faGear,
  faPowerOff,
  faBook,
  faCab,
  faContactBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <section className="bg-white shadow-lg text-black h-screen   p-3  w-60 hidden sm:block ">
      <div className=" justify-between m-2 flex flex-col mt-24">
      <div className="flex flex-col  ">
        <div className="bg-blue-900 text-white list-none rounded-md p-2 mb-2 flex justify-start items-center gap-2">
          <FontAwesomeIcon icon={faDashboard} />
          <li>Dashboard</li>
        </div>
        <div className="bg-[#c6c9ff] text-white list-none rounded-md p-2 mb-2 flex justify-start items-center gap-2">
          <FontAwesomeIcon icon={faProcedures} />
          <li>Products</li>
        </div>
        <div className="bg-[#c6c9ff] text-white list-none rounded-md p-2 mb-2 flex justify-start items-center gap-2">
          <FontAwesomeIcon icon={faCashRegister} />
          <li>Payments</li>
        </div>
        <div className="bg-[#c6c9ff] text-white list-none rounded-md p-2 mb-2 flex justify-start items-center gap-2">
          <FontAwesomeIcon icon={faCaretSquareRight} />
          <li>Categories</li>
        </div>
        <div className="bg-[#c6c9ff] text-white list-none rounded-md p-2 mb-2 flex justify-start items-center gap-2">
          <FontAwesomeIcon icon={faUmbrella} />
          <li>Orders</li>
        </div>
        <div className="bg-[#c6c9ff] text-white list-none rounded-md p-2 mb-2 flex justify-start items-center gap-2">
          <FontAwesomeIcon icon={faBook} />
          <li>About</li>
        </div>
        <div className="bg-[#c6c9ff] text-white list-none rounded-md p-2 mb-2 flex justify-start items-center gap-2">
          <FontAwesomeIcon icon={faCab} />
          <li>Service</li>
        </div>
        <div className="bg-[#c6c9ff] text-white list-none rounded-md p-2 mb-2 flex justify-start items-center gap-2">
          <FontAwesomeIcon icon={faContactBook} />
          <li>Contact</li>
        </div>
      </div>
      <div className="">
        <div className="bg-[#c6c9ff] text-white list-none rounded-md p-2 mb-2 flex justify-start items-center gap-2">
          <FontAwesomeIcon icon={faGear} />
          <li>Settings</li>
        </div>
        <div className="bg-[#c6c9ff] text-white list-none rounded-md p-2 mb-2 flex justify-start items-center gap-2">
          <FontAwesomeIcon icon={faPowerOff} />
          <li>Logout</li>
        </div>
      </div>

      </div>
    </section>
  );
};

export default Sidebar;
