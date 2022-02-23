import styles from "./index.module.css";
import { useState, useEffect } from "react";
import DataSrv from "../../../services/dataSrv";

const SalesTurnover = ({
  startDate,
  endDate,
}: {
  startDate: moment.Moment;
  endDate: moment.Moment;
}) => {
  const [sales, setSales] = useState<string>("Rp 0");
  const [turnover, setTurnover] = useState<string>("0%");

  const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    const dataSrv = new DataSrv();
    const { sales, turnover } = dataSrv.getSalesData(startDate, endDate);
    setSales("Rp " + numberWithCommas(sales));
    setTurnover(turnover + "%");
  }, [startDate, endDate]);

  return (
    <div className={styles.salesTurnover + " mb-4"}>
      <div
        className={
          styles.salesTurnoverHeader +
          " d-flex align-items-center justify-content-between"
        }
      >
        <h3>Sales Turnover</h3>
        <div className={styles.moreIconContainer} title="No implementation">
          <img src="/assets/more-options.svg" alt="more options" />
        </div>
      </div>
      <div className={styles.salesTurnoverContent + " d-flex mt-2"}>
        <div className={styles.contentLeft}>
          <h1>{sales}</h1>
          <div className="d-flex align-items-center mt-2">
            <div className={styles.redArrowContainer + " me-1"}>
              <img src="/assets/red-arrow.svg" alt="red arrow" />
            </div>
            <h2 className="me-1">{turnover}</h2>
            <p>last period in products sold</p>
          </div>
        </div>
        <div className={styles.contentRight + " ms-3"}>
          <img src="/assets/sales-turnover.svg" alt="sales turnover" />
        </div>
      </div>
    </div>
  );
};

export default SalesTurnover;
