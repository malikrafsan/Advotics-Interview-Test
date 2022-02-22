import DateRangePicker from "react-bootstrap-daterangepicker";
import moment from "moment";
import "moment/min/locales";
import { useState } from "react";
import PeriodButton from "../PeriodButton";
import styles from "./index.module.css";

const range = {
  Today: [moment(), moment()],
  Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
  "Last 7 Days": [moment().subtract(7, "days"), moment().subtract(1, "days")],
  "Last 30 Days": [moment().subtract(30, "days"), moment().subtract(1, "days")],
  "This Month": [moment().startOf("month"), moment()],
};

const DashboardContent = ({ onChangePeriod }: { onChangePeriod: Function }) => {
  const [days, setDays] = useState(7);
  const [startDate, setFromDate] = useState(moment().subtract(7, "days"));
  const [endDate, setToDate] = useState(moment().subtract(1, "days"));
  const [isOpen, setIsOpen] = useState(false);

  const initialSettings = {
    startDate: startDate,
    endDate: endDate,
    alwaysShowCalendars: true,
    minDate: moment().subtract(6, "month"),
    maxDate: moment().subtract(1, "days"),
    ranges: range,
    opens: "center",
  };

  const handleApply = (_: any, date: any) => {
    const startDate = date.startDate;
    const endDate = date.endDate;
    const days = moment(date.endDate).diff(moment(date.startDate), "days") + 1;
    setDays(days);
    setFromDate(startDate);
    setToDate(endDate);
    onChangePeriod({ startDate, endDate, days });
  };

  return (
    <div className={styles.container + " w-100 mb-5"}>
      <div
        className={
          styles.header +
          " d-flex justify-content-between align-items-center flex-column flex-md-row"
        }
      >
        <h1>Dashboard</h1>
        <DateRangePicker
          initialSettings={initialSettings}
          onShow={() => setIsOpen(true)}
          onHide={() => setIsOpen(false)}
          onApply={handleApply}
        >
          <PeriodButton
            isOpen={isOpen}
            startDate={startDate}
            endDate={endDate}
          />
        </DateRangePicker>
      </div>
    </div>
  );
};

export default DashboardContent;
