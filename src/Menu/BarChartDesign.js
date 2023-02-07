import React from "react";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import MoreVertIcon from "@mui/icons-material/MoreVert";
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
      <CardHeader
        title="Cost Vs Sales"
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        className="bg-light shadow"
      ></CardHeader>
      <br />
      <BarChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" strokeWidth={2} />
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
