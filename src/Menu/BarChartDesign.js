import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Paper } from "@mui/material";

const data = [
  { month: "June-22", cost: 25, sales: 25 },
  { month: "July-22", cost: 30, sales: 15 },
  { month: "Aug-22", cost: 55, sales: 85 },
  { month: "Sep-22", cost: 20, sales: 20 },
  { month: "Oct-22", cost: 15, sales: 35 },
  { month: "Nov-22", cost: 25, sales: 55 },
];

function BarChartDesign() {
  return (
    <Paper sx={{ padding: 2 }}>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Legend />
        <Bar dataKey="cost" fill="#82ca9d" />
        <Bar dataKey="sales" fill="#8884d8" />
        <Tooltip />
      </BarChart>
    </Paper>
  );
}

export default BarChartDesign;
