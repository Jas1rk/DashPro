import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import UserList from "../Components/UserList";
import Weather from "../Components/Weather";
import Sidebar from "../Components/Sidebar";
import PdfExport from "../Components/PdfExport";
import Chart from "../Components/Chart";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [dailyData, setDailyData] = useState([]);

  return (
    <>
      <Navbar />
      <div className="flex gap-10 ">
        <Sidebar />
        <div className="flex  flex-col">
          <div className="md:flex gap-5">
            <UserList onUserData={setUsers} />

            <Weather onDailyData={setDailyData} />
          </div>
          <Chart weatherData={dailyData} />
        </div>
      </div>
    </>
  );
};

export default Home;
