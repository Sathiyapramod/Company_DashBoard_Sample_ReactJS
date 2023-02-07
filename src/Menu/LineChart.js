import React from "react";

import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { Paper } from "@mui/material";

function ChartData() {
  const data = [
    { name: "User A", frequency: 3, books: 4 },
    { name: "User B", frequency: 4, books: 2 },
    { name: "User C", frequency: 2, books: 9 },
    { name: "User D", frequency: 1, books: 5 },
    { name: "User E", frequency: 2, books: 9 },
    { name: "User F", frequency: 8, books: 9 },
    { name: "User G", frequency: 0, books: 9 },
  ];
  return (
    <div className="shadow">
      <Paper>
        <CardHeader
          title="Earnings Overview"
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          className="bg-light shadow"
        ></CardHeader><br />
        <LineChart
          width={750}
          height={400}
          data={data}
          margin={{ top: 5, right: 30, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="frequency" stroke="#8884d8" strokeWidth={3} />
          <CartesianGrid stroke="#ccc" strokeWidth={2} strokeDasharray="6 6" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip viewBox={{ x: 0, y: 0, width: 200, height: 200 }} />
          <Legend />
        </LineChart>
      </Paper>
    </div>
  );
}

export default ChartData;
