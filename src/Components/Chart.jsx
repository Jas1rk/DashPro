
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ weatherData }) => {
  return (
    <div className="md:p-2 p-6">
    <div className="bg-white rounded-lg p-2 shadow-md md:mt-28 ">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={weatherData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="temperature" />
          <Tooltip />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>

    </div>
  );
};

export default Chart;
