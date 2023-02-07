import BarChartDesign from "./Menu/BarChartDesign";
import { Paper, Typography } from "@mui/material";
import ChartData from "./Menu/LineChart";
import PieChartDesign from "./Menu/PieChart";

export default function Chart() {
  return (
    <div className="p-2 text-start m-2">
      <Typography variant="h6">
        <h1>Charts</h1>
        <p>
          All the Charts prepared using React Recharts Library. Please visit{" "}
          <a
            href="https://recharts.org/en-US/"
            target="_blank"
            rel="noreferrer"
          >
            official website{" "}
          </a>{" "}
          for documentation
        </p>
      </Typography>
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-5 m-5">
        <Paper sx={{ width: "60%", height: "100%" }}>
          <ChartData />
        </Paper>
        <PieChartDesign />
      </div>
      <div
        className="d-flex flex-row justify-content-center align-items-center"
        width="50%"
      >
        <BarChartDesign />
      </div>
    </div>
  );
}
