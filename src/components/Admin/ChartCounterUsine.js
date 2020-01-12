import React from "react";
// import Link from "@material-ui/core/Link";
// import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import Chart from "react-google-charts";

// const useStyles = makeStyles({
//   depositContext: {
//     flex: 1
//   }
// });

export default function ChartCounterUsine() {
  //   const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Nombre d'incidents: USINE</Title>
      <div>
        <Chart
          width={600}
          height={350}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Type d'incident", "Nombre"],
            ["Tentative de vol", 29],
            ["Sit-in", 42],
            ["Tentative d'intrusion", 15],
            ["Intrusion", 0],
            ["Vol", 4],
            ["Aggression", 17]
          ]}
          options={{
            title: "USINE",
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
