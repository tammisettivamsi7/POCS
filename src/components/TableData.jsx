import React from "react";
import chart from "../assests/jsonData/Chart.json";
import "../assests/style/TableData.css";

export default function TableData() {
  return (
    <div className="tableContainer">
      <h2>Sales of sony Tv </h2>
      <table className="tabledata">
        <tr>
          <th>month</th>
          <th>Value</th>
        </tr>

        {chart.map((data) => {
          return (
            <tr key={data.id}>
              <td>{data.month}</td>
              <td>{data.value}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
