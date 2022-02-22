import { ChartData } from "chart.js";

class DataSrv {
  constructor() {}

  _getChartDatum = (factor: number, offset: number) => {
    const data = Array(7)
      .fill(0)
      .map((_, idx) => {
        return Math.floor(Math.random() * factor) + offset;
      });

    return data;
  };

  getChartData(period: string): ChartData<any> {
    return {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Nett",
          data: this._getChartDatum(10000, 15000),
          backgroundColor: "#37B04C",
          borderWidth: 0,
          barThickness: 25,
          order: 2,
        },
        {
          label: "Gross",
          data: this._getChartDatum(3000, 0),
          backgroundColor: "#289E45",
          borderWidth: 0,
          barThickness: 25,
          order: 2,
        },
        {
          label: "Average Purchase Value",
          data: this._getChartDatum(1000, 0),
          backgroundColor: "#7AE28C",
          borderWidth: 0,
          barThickness: 25,
          order: 2,
        },
        {
          label: "Unit per Transaction",
          data: this._getChartDatum(10, 0),
          backgroundColor: "#707070",
          borderWidth: 0,
          barThickness: 25,
          order: 2,
        },
        {
          label: "line",
          data: this._getChartDatum(10000, 15000),
          backgroundColor: "#FFE854",
          borderColor: "#FFE854",
          tension: 0.4,
          type: "line",
          order: 1,
        },
      ],
    };
  }

  _getProductName(idx: number) {
    const names = [
      "Sosis Champ",
      "Bebelac",
      "Sunco",
      "Sunlight",
      "Wipol",
      "Sabun Klin",
      "Porstex",
      "Nugget Fiesta",
      "Nugget So Good",
      "Nugget So Nice",
    ];

    return names[idx];
  }

  getSKUData(isCompetitor: boolean) {
    const arr = Array(5)
      .fill({})
      .map((_, idx) => {
        return {
          img:
            "/assets/product-icon" +
            ((isCompetitor ? 5 : 0) + idx + 1) +
            ".jpg",
          name: this._getProductName((isCompetitor ? 5 : 0) + idx),
          price: Math.floor(Math.random() * 9) * 10000 + 10000,
          qty: Math.floor(Math.random() * 10) * 10,
        };
      });

    arr.sort((a, b) => b.qty - a.qty);
    return arr;
  }

  getSalesData(startDate: moment.Moment, endDate: moment.Moment) {
    return {
      sales: Math.floor(Math.random() * 100) * 10000,
      turnover: Math.floor(Math.random() * 100) / 10,
    };
  }
}

export default DataSrv;
