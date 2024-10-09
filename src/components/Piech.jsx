import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import chart from "../assests/jsonData/Chart.json";

export default function Piech() {
  const options = {
    chart: {
      type: "pie",
      width: 400,
      height: 400,
      options3d: {
        enabled: true,
        alpha: 10,
        beta: 25,
        depth: 100,
      },
    },
    title: {
      text: "Pie Chart",
    },
    plotOptions: {
      pie: {
        cursor: "pointer",
        depth: 25,
        colorByPoint: true,
      },
    },
    series: [
      {
        name: "value",
        data: chart.map((data) => [data.month, data.value]),
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
