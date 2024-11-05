import React from "react";
import Navbar from "../Components/Navbar";
import UserList from "../Components/UserList";
import Weather from "../Components/Weather";
import Chart from "../Components/Chart";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="m-5 flex flex-col sm:flex-row gap-5">
        <UserList />
        <div className="flex flex-col">
          <Weather />
          <Chart />
        </div>
      </div>
    </>
  );
};

export default Home;
