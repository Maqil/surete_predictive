import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  },
  wrapper: { marginTop: 30 },
  item: {
    marginTop: 35
  },
  title: {
    fontSize: 18,
    fontWeight: "500"
  }
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.wrapper}>
        <div className={classes.item}>
          <Typography component="p" className={classes.title} color="primary">
            Immigrants interceptés
          </Typography>
          <Typography component="p" variant="h4">
            1186
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography component="p" className={classes.title} color="primary">
            Immigrants non interceptés
          </Typography>
          <Typography component="p" variant="h4">
            357
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography component="p" className={classes.title} color="primary">
            Personnes arrétés Usine
          </Typography>
          <Typography component="p" variant="h4">
            17
          </Typography>
        </div>
      </div>
    </React.Fragment>
  );
}
