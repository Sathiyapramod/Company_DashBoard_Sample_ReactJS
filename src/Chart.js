import BarChartDesign from "./Menu/BarChartDesign";
import ChartData from "./Menu/LineChart";
import PieChartDesign from "./Menu/PieChart";

export default function Chart() {
  return (
    <div className="p-2 text-start m-2">
      <div>
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
      </div>
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 m-5">
        <ChartData />
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center gap-3">
        <PieChartDesign />
        <BarChartDesign />
      </div>
    </div>
  );
}
