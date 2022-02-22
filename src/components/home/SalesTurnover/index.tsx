import styles from "./index.module.css";

const SalesTurnover = () => {
  return (
    <div className={styles.salesTurnover + " mb-4"}>
      <div
        className={
          styles.salesTurnoverHeader +
          " d-flex align-items-center justify-content-between"
        }
      >
        <h3>Sales Turnover</h3>
        <div className={styles.moreIconContainer}>
          <img src="/assets/more-options.svg" alt="more options" />
        </div>
      </div>
      <div className={styles.salesTurnoverContent + " d-flex mt-2"}>
        <div className={styles.contentLeft}>
          <h1>Rp 3,600,000</h1>
          <div className="d-flex align-items-center mt-2">
            <div className={styles.redArrowContainer + " me-1"}>
              <img src="/assets/red-arrow.svg" alt="red arrow" />
            </div>
            <h2 className="me-1">13.8%</h2>
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
