import React from "react";
import { Paper } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import { Legend, Pie, PieChart, Tooltip, Cell } from "recharts";
const data01 = [
  {
    name: "Direct",
    value: 320,
    color: "#8884d8",
  },
  {
    name: "Referral",
    value: 300,
    color: "#729482",
  },
  {
    name: "Social",
    value: 250,
    color: "#5894f2",
  },
];

function PieChartDesign() {
  return (
    <div className="shadow">
      <Paper>
        <CardHeader
          title="Revenue Sources"
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          className="bg-light shadow"
        ></CardHeader>
        <PieChart width={450} height={400}>
          <Pie
            dataKey="value"
            data={data01}
            nameKey="name"
            outerRadius={90}
            innerRadius={50}
            cx="50%"
            cy="50%"
            fontSize={20}
            label
          >
            {data01.map((element, index) => {
              return <Cell key={index} fill={element.color} />;
            })}
          </Pie>
          <Tooltip title />
          <Legend />
        </PieChart>
      </Paper>
    </div>
  );
}

export default PieChartDesign;
