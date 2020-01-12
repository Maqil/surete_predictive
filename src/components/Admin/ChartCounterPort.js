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
          width={600}
          height={350}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Type d'incident", "Nombre"],
            ["Tentative de vol", 0],
            ["Sit-in", 2],
            ["Tentative d'intrusion", 651],
            ["Intrusion", 5],
            ["Vol", 0],
            ["Aggression", 0]
          ]}
          options={{
            title: "PORT",
            chartArea: { width: "50%" },
            isStacked: true,
            hAxis: {
              title: "Type d'incident",
              minValue: 0
            },
            colors: ["#00c48c"],
            vAxis: {
              title: "Nombre"
            }
          }}
          // For tests
          rootProps={{ "data-testid": "3" }}
        />
      </div>
    </React.Fragment>
  );
}
