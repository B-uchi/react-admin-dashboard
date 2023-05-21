import React from "react";
import "./homeChart.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { data } from "./data.js";

export const HomeChart = () => {
  const chart = (interval) => (
    <ResponsiveContainer height={250} width="100%">
      <LineChart data={data} margin={{ right: 25, top: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={interval} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="Active Users"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <div className="chart-container">
      <h3>User Analytics</h3>
      {chart("preserveEnd")}
    </div>
  );
};
