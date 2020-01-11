import React from "react";
import Chart from "react-google-charts";

const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 900],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 900],
  ["RU", 700]
];

export default function Map(props) {
  return (
    <div className="App">
      <Chart chartType="GeoChart" width="100%" height="400px" data={data} />
    </div>
  );
}
