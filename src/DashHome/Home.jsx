import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import UserList from "../Components/UserList";
import Weather from "../Components/Weather";
import Sidebar from "../Components/Sidebar";
import PdfExport from "../Components/PdfExport";


const Home = () => {
  const dashboardref = useRef(null);
  

  return (
    <>
      <Navbar />
      <div className="m-5 flex gap-5">
        <Sidebar />

        <div className="flex flex-col">
          <div className="flex justify-end items-end">
            <PdfExport contentRef={dashboardref}/>
          </div>

          <div ref={dashboardref} className="flex flex-col mt-3 sm:flex-row md:flex-row gap-5">
            <UserList />
            <div>
              <Weather />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
