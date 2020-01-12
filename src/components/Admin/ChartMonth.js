import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Chart from "react-google-charts";
import Title from "./Title";

// const useStyles = makeStyles(theme => ({
//   seeMore: {
//     marginTop: theme.spacing(3)
//   }
// }));

export default function ChartMonth() {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Suivi des incidents par mois</Title>
      <Chart
        width={1000}
        height={400}
        chartType="Line"
        loader={<div>Loading Chart</div>}
        data={[
          ["année", "2015", "2016", "2017", "2018", "2019"],
          ["Janvier", 15, 14, 34, 6, 24],
          ["Fevrier", 23, 11, 36, 14, 21],
          ["Mars", 14, 6, 28, 15, 5],
          ["Avril", 12, 8, 12, 7, 3],
          ["Mai", 8, 0, 0, 5, 10],
          ["Juin", 10, 18, 10, 9, 9],
          ["Juillet", 8, 0, 19, 8, 10],
          ["Août", 14, 19, 20, 8, 1],
          ["Septembre", 11, 20, 17, 15, 0],
          ["Octobre", 15, 0, 23, 22, 20],
          ["Novembre", 8, 7, 21, 16, 14],
          ["Decembre", 0, 27, 7, 19, 15]
        ]}
        // options={{
        //   chart: {
        //     title: "Suivi des incidents par mois"
        //   }
        // }}
        rootProps={{ "data-testid": "5" }}
      />
    </React.Fragment>
  );
}
