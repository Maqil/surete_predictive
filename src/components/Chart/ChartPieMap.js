import React from "react";
import Chart from "react-google-charts";

// function preventDefault(event) {
//   event.preventDefault();
// }

// const useStyles = makeStyles({
//   depositContext: {
//     flex: 1
//   }
// });

export default function ChartPieMap(props) {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <div style={{ marginLeft: -40 }}>
        <Chart
          width={600}
          height={380}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Type d'incident", "Nombre"],
            ["Tentative d'intrusion", props.tentative_intrusion],
            ["Immobilisation", props.immobilisation],
            ["Tentative de vol", props.tentative_vol],
            ["Sit-in", props.sit_in],
            ["Intrusion", props.intrusion],
            ["Vol", props.vol]
          ]}
          options={{
            title: props.name,
            // Just add this option
            pieHole: 0.4
          }}
          rootProps={{ "data-testid": "3" }}
        />
      </div>
    </React.Fragment>
  );
}
