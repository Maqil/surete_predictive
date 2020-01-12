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
      <Title>Suivi des incidents par zone: PORT</Title>
      <div style={{ marginLeft: -40 }}>
        <Chart
          width={600}
          height={380}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Zone", "Pourcentage"],
            ["zone soufre", 172],
            ["Zone engrai/phosphate", 147],
            ["zone amoniac", 32],
            ["Quai EP", 205],
            ["ANP", 83],
            ["administration", 3]
          ]}
          options={{
            title: "PORT",
            // Just add this option
            pieHole: 0.4
          }}
          rootProps={{ "data-testid": "3" }}
        />
      </div>
    </React.Fragment>
  );
}
