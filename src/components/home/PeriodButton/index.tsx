import styles from "./index.module.css";
import React, { FC, LegacyRef } from "react";

const PeriodButton = React.forwardRef(
  (
    props: {
      startDate: moment.Moment;
      endDate: moment.Moment;
      isOpen: boolean;
    },
    ref: LegacyRef<HTMLDivElement>
  ) => {
    return (
      <div
        className={
          styles.container +
          " d-flex align-items-center justify-content-between"
        }
        ref={ref}
      >
        <div className={styles.iconContainer}>
          <img src="/assets/calendar-icon.png" alt="calendar icon" />
        </div>
        <p className="my-0">Period</p>
        <div className={styles.periodTime}>
          {props.startDate.format("DD MMMM YYYY") +
            " - " +
            props.endDate.format("DD MMMM YYYY")}
        </div>
        <div className={styles.arrowContainer}>
          <img
            src="/assets/down-arrow.svg"
            alt="arrow"
            className={props.isOpen ? styles.arrowUp : styles.arrowDown}
          />
        </div>
      </div>
    );
  }
);

PeriodButton.displayName = "PeriodButton";

export default PeriodButton;
