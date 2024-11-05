import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import UserList from "../Components/UserList";
import Weather from "../Components/Weather";
import Chart from "../Components/Chart";

const Home = () => {
  const weatherRef = useRef(null)
  console.log("here",weatherRef.current)
  return (
    <>
      <Navbar />
      <div className="m-5 flex flex-col sm:flex-row gap-5">
        <UserList />
        <div ref={weatherRef}>
          <Weather />
        </div>
      </div>
    </>
  );
};

export default Home;
