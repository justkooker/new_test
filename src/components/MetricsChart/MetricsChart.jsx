import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import s from "./MetricsChart.module.scss";

const MetricsChart = ({ chartData, metricKeys }) => {
  if (!chartData || chartData.length === 0 || metricKeys.length === 0) {
    return <p>No data for dispaly graph</p>;
  }

  const generateColor = (index, total) => {
    const hue = Math.floor((360 / total) * index);
    return `hsl(${hue}, 70%, 50%)`;
  };

  return (
    <div className={s.chart}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="step" />
          <YAxis />
          <Tooltip />
          <Legend />
          {metricKeys.map((key, index) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={generateColor(index, metricKeys.length)}
              dot={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MetricsChart;
