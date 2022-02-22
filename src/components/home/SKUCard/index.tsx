import styles from "./index.module.css";
import DataSrv from "../../../services/dataSrv";
import { ISKUData } from "./interface";
import { useState, useEffect } from "react";

const SKUCard = ({
  isCompetitor,
  startDate,
  endDate,
}: {
  isCompetitor: boolean;
  startDate: moment.Moment;
  endDate: moment.Moment;
}) => {
  const [skuData, setSKUData] = useState<ISKUData[]>([]);

  useEffect(() => {
    const dataSrv = new DataSrv();
    const data = dataSrv.getSKUData(isCompetitor);
    setSKUData(data);
    console.log(skuData);
  }, [startDate, endDate]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{isCompetitor ? "TOP COMPETITOR SKU" : "BEST SELLING SKU"}</h1>
      </div>
      <div className={styles.content}>
        {skuData.map((item: ISKUData, idx: number) => {
          return (
            <div
              className={
                (idx === 0 ? styles.topItemContainer : styles.itemContainer) +
                " d-flex align-items-center"
              }
              key={idx}
            >
              <div className={styles.itemImgContainer}>
                <img src={item.img} alt={item.name + " icon"} />
              </div>
              <div className={styles.itemInfo}>
                <div className={styles.itemName}>{item.name}</div>
                <div
                  className={
                    styles.itemStats + " d-flex justify-content-between"
                  }
                >
                  <div className={styles.itemPrice}>Rp {item.price}</div>
                  <div className={styles.itemQty}>{item.qty}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SKUCard;
