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
      <Title>Nombre d'incidents par poste de travail: USINE</Title>
      <div>
        <Chart
          width={600}
          height={350}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Post", "Nombre"],
            ["1er", 46],
            ["2ème", 32],
            ["3ème", 33]
          ]}
          options={{
            // Just add this option
            is3D: true
          }}
          rootProps={{ "data-testid": "2" }}
        />
      </div>
    </React.Fragment>
  );
}
