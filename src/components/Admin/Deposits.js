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
      <Title>Pourcentage d'incidents par site</Title>
      <div style={{ marginLeft: -95 }}>
        <Chart
          width={600}
          height={380}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Site", "compteur"],
            ["Plateau", 4],
            ["Port", 658],
            ["Usine", 111]
          ]}
          // options={{
          //   colors: ["#3e68c5", "#00c48c", "#cc4628"]
          // }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    </React.Fragment>
  );
}
