import React, { Component } from "react";
import Title from "./Title";
import Chart from "react-google-charts";

export default class ChartItems extends Component {
  render() {
    return (
      <div>
        <Title>Nombre d'incident par année</Title>
        <div
          style={{
            display: "flex",
            maxWidth: 900,
            marginLeft: -90,
            marginTop: -10
          }}
        >
          <Chart
            width={750}
            height={380}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Year", "Nombre d'incident"],
              ["2015", 138],
              ["2016", 130],
              ["2017", 227],
              ["2018", 144],
              ["2019", 132]
            ]}
            options={{
              // title: "Nombre d'incident par année",
              chartArea: { width: "45%" },
              hAxis: {
                title: "Année",
                minValue: 0
              }
              // vAxis: {
              //   title: "Nombre d'incident"
              // }
            }}
            legendToggle
          />
          {/* <Chart
            width={820}
            height={400}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[
              ["Year", "Sales"],
              ["2015", 1170],
              ["2016", 660],
              ["2017", 1030],
              ["2018", 1030],
              ["2019", 1030]
            ]}
            options={{
              // Material design options
              chart: {
                title: "Nombre d'incident par année",
                subtitle: "année: 2015-2019"
              }
            }}
            // For tests
            rootProps={{ "data-testid": "2" }}
          /> */}
        </div>
      </div>
    );
  }
}
