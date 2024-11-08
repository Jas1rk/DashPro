import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "./Chart";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Weather = ({ onDailyData }) => {
  const [weather, setWeather] = useState(null);
  const [dailyData, setDailyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=c4e773740e75472f0dfc9d53ca7186ba&units=metric`
        );
        const result = data.list;
        const dailyData = result.map((entry) => ({
          date: entry.dt_txt,
          temperature: entry.main.temp,
        }));
        onDailyData(dailyData);
        setDailyData(dailyData);
        setWeather(result[Math.floor(Math.random() * result.length)]);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  return (
    <div>
      {loading ? (
        <Skeleton count={5} />
      ) : (
        <div className="flex flex-col">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] sm:w-[120%]  mx-auto">
            <h2 className="text-2xl font-bold mb-2">London</h2>
            <div className="flex items-center justify-between mb-4">
              <img
                src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                alt={weather?.weather[0]?.description}
                className="w-20 h-20"
              />
              <div className="text-5xl font-semibold">
                {Math.round(weather?.main?.temp)}°C
              </div>
            </div>
            <div className="text-gray-700 text-lg mb-4">
              {weather?.weather[0]?.main} - {weather?.weather[0]?.description}
            </div>
            <div className="flex justify-between text-gray-600">
              <div>
                <span className="font-medium">Humidity:</span>{" "}
                {weather?.main?.humidity}%
              </div>
              <div>
                <span className="font-medium">Wind Speed:</span>
                {Math.round(weather?.wind?.speed)} m/s
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Chart weatherData={dailyData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
