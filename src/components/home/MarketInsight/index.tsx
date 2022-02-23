import Accordion from "react-bootstrap/Accordion";
import styles from "./index.module.css";
import SalesTurnover from "../SalesTurnover";
import Chart from "../Chart";
import SKUCard from "../SKUCard";

const MarketInsights = ({
  startDate,
  endDate,
}: {
  startDate: moment.Moment;
  endDate: moment.Moment;
}) => {
  return (
    <div className={styles.container}>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header
            className={styles.header + " w-100 d-flex justify-content-between"}
          >
            <h1>MARKET INSIGHTS</h1>
            <div style={{ flexGrow: 2 }}></div>
            <div
              className="d-flex align-items-center me-2"
              title="No implementation"
            >
              <img
                src="/assets/help-icon.png"
                alt="help icon"
                className="me-2"
              />
              <h2>Click here for help</h2>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <SalesTurnover startDate={startDate} endDate={endDate} />
            <div
              className={
                styles.contentContainer + " d-flex justify-content-between"
              }
            >
              <Chart />
              <div className={styles.skuCardsContainer + " d-flex"}>
                <SKUCard
                  isCompetitor={false}
                  startDate={startDate}
                  endDate={endDate}
                />
                <SKUCard
                  isCompetitor={true}
                  startDate={startDate}
                  endDate={endDate}
                />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default MarketInsights;
