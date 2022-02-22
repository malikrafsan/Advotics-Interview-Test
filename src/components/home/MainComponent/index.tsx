import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DashboardContent from "../DashboardContent";
import MarketInsights from "../MarketInsight";
import styles from "./index.module.css";
import { useState } from "react";
import moment from "moment";

const MainComponent = () => {
  const [startDate, setStartDate] = useState(moment().subtract(7, "days"));
  const [endDate, setEndDate] = useState(moment().subtract(1, "days"));

  const handleChange = ({
    startDate,
    endDate,
  }: {
    startDate: moment.Moment;
    endDate: moment.Moment;
  }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    console.log(startDate, endDate);
  };

  return (
    <div className={styles.mainComponentContainer}>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <div className={styles.contentContainer + " w-100"}>
          <DashboardContent onChangePeriod={handleChange} />
          <MarketInsights startDate={startDate} endDate={endDate} />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
