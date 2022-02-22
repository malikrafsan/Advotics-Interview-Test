import React, { LegacyRef, useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  LineController,
  ChartOptions,
} from "chart.js";
import styles from "./index.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import DataSrv from "../../../services/dataSrv";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  LineController,
);

const Chart = React.forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {
  const periodOptions = ["Yesterday", "Last 7 Days", "This Month", "Custom"];
  const [period, setPeriod] = useState(periodOptions[1]);

  const chartColors = {
    net: "rgba(55, 176, 76, 0.5)",
    gross: "rgba(40, 158, 69, 0.5)",
    apv: "rgba(22, 226, 140, 0.5)",
    upt: "rgba(112, 112, 112, 0.5)",
    line: "rgba(75, 192, 192, 0.5)",
  };

  const dataSrv = new DataSrv();
  const data = dataSrv.getChartData(period);

  const options: ChartOptions<any> = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          filter: (item: any) => {
            return item.text !== "line";
          },
          boxWidth: 18,
          boxHeight: 8,
          color: "#4D4F5C80",
        },
      },
    },
    interaction: {
      mode: "index",
      intersect: true,
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        stacked: true,
        min: 10000,
        max: 30000,
        ticks: {
          stepSize: 5000,
        },
      },
    },
  };

  const config = {
    type: "bar",
    data,
    options,
  };

  return (
    <div ref={ref} className={styles.container}>
      <div
        className={
          styles.header + " d-flex align-items-center justify-content-between"
        }
      >
        <h1>AVERAGE PURCHASE VALUE</h1>
        <div className={styles.headerRight + " d-flex align-items-center"}>
          <DropdownButton id="dropdown-period" title={period}>
            {periodOptions.map((option, index) => {
              return (
                <Dropdown.Item key={index} onClick={() => setPeriod(option)}>
                  {option}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
          <div className={styles.moreOptionsContainer + " ms-2"}>
            <img src="/assets/more-options.svg" alt="more options" />
          </div>
        </div>
      </div>
      <Bar data={config.data} options={config.options} />
    </div>
  );
});

Chart.displayName = "Chart";

export default Chart;
