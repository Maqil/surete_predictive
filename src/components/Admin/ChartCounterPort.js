import React from "react";
// import Link from "@material-ui/core/Link";
// import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import Chart from "react-google-charts";

// function preventDefault(event) {
//   event.preventDefault();
// }

// const useStyles = makeStyles({
//   depositContext: {
//     flex: 1
//   }
// });

export default function ChartCounterPort() {
  //   const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Nombre d'incidents: PORT</Title>
      <div>
        <Chart
          width={500}
          height={300}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["City", "2010 Population"],
            ["New York City, NY", 8175000],
            ["Los Angeles, CA", 3792000],
            ["Chicago, IL", 2695000],
            ["Houston, TX", 2099000],
            ["Philadelphia, PA", 1526000]
          ]}
          options={{
            title: "PORT",
            chartArea: { width: "50%" },
            isStacked: true,
            hAxis: {
              title: "Total Population",
              minValue: 0
            },
            colors: ["#00c48c"],
            vAxis: {
              title: "City"
            }
          }}
          // For tests
          rootProps={{ "data-testid": "3" }}
        />
      </div>
    </React.Fragment>
  );
}
