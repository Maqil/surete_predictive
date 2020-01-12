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

export default function Deposits() {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Suivi des incidents par zone: USINE</Title>
      <div style={{ marginLeft: -40 }}>
        <Chart
          width={600}
          height={380}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Zone", "Pourcentage"],
            ["BAB SOUIRA", 32],
            ["Sotreg", 4],
            ["OIS/M", 9],
            ["OIS/C", 48],
            ["OIS/D", 16],
            ["CCI", 2]
          ]}
          options={{
            title: "USINE",
            // Just add this option
            pieHole: 0.4
          }}
          rootProps={{ "data-testid": "3" }}
        />
      </div>
    </React.Fragment>
  );
}
