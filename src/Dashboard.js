import React from "react";
import { Button } from "@mui/material";
import { BoardItems } from "./Menu/BoardItems";
import ChartData from './Menu/LineChart';
import PieChartDesign from './Menu/PieChart'

const Dashboard = () => {
  return (
    <div>
      <div className="d-flex flex-row justify-content-between align-items-center p-3">
        <div className="text-start p-3 fw-bold opacity-75 fs-1">Dashboard</div>
        <div>
          <Button className="btn btn-primary p-3">Generate Report</Button>
        </div>
      </div>
      <div className="d-flex flex-row gap-3 justify-content-center p-4 flex-wrap">
        <BoardItems />
        <ChartData />
        <PieChartDesign />
      </div>
    </div>
  );
};

export default Dashboard;
