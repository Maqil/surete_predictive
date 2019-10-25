import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Grid, Divider, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  gridcontainer: {
    height: 75
  },
  griditem: {
    marginTop: 10
  },
  tableH: {
    fontSize: 14,
    opacity: 0.5,
    fontWeight: "500",
    lineHeight: 1.43,
    color: "#243b6b"
  },
  tableD: {
    fontSize: 14,
    color: "#243b6b"
  }
}));

export default function NestedGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.gridcontainer}>
        <Grid container item xs={12} spacing={3} className={classes.griditem}>
          <React.Fragment>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                indice de battance
              </Typography>
              <Typography className={classes.tableD} align="center">
                76
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                pH eau
              </Typography>
              <Typography className={classes.tableD} align="center">
                76
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                PH Kcl
              </Typography>
              <Typography className={classes.tableD} align="center">
                76
              </Typography>
            </Grid>
          </React.Fragment>
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <Grid container spacing={1} className={classes.gridcontainer}>
        <Grid container item xs={12} spacing={3} className={classes.griditem}>
          <React.Fragment>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                CaCo3 total%
              </Typography>
              <Typography className={classes.tableD} align="center">
                64
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                CaCo3 actif %
              </Typography>
              <Typography className={classes.tableD} align="center">
                64
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                C.E.C (meq/100g)
              </Typography>
              <Typography className={classes.tableD} align="center">
                64
              </Typography>
            </Grid>
          </React.Fragment>
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <Grid container spacing={1} className={classes.gridcontainer}>
        <Grid container item xs={12} spacing={3} className={classes.griditem}>
          <React.Fragment>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                Ec ext1/5 ms/cm
              </Typography>
              <Typography className={classes.tableD} align="center">
                32,0
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                Na2O ppm
              </Typography>
              <Typography className={classes.tableD} align="center">
                32,0
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                CI- ppm
              </Typography>
              <Typography className={classes.tableD} align="center">
                32,0
              </Typography>
            </Grid>
          </React.Fragment>
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <Grid container spacing={1} className={classes.gridcontainer}>
        <Grid container item xs={12} spacing={3} className={classes.griditem}>
          <React.Fragment>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                ESP %
              </Typography>
              <Typography className={classes.tableD} align="center">
                50
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                Na meq/100g
              </Typography>
              <Typography className={classes.tableD} align="center">
                50
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                Rapport C/N
              </Typography>
              <Typography className={classes.tableD} align="center">
                50
              </Typography>
            </Grid>
          </React.Fragment>
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <Grid container spacing={1} className={classes.gridcontainer}>
        <Grid container item xs={12} spacing={3} className={classes.griditem}>
          <React.Fragment>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                N organique ppm
              </Typography>
              <Typography className={classes.tableD} align="center">
                13
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                MO %
              </Typography>
              <Typography className={classes.tableD} align="center">
                13
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                K2O echangable ppm
              </Typography>
              <Typography className={classes.tableD} align="center">
                13
              </Typography>
            </Grid>
          </React.Fragment>
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <Grid container spacing={1} className={classes.gridcontainer}>
        <Grid container item xs={12} spacing={3} className={classes.griditem}>
          <React.Fragment>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                P2O5 echangable olsen ppm
              </Typography>
              <Typography className={classes.tableD} align="center">
                0,12
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                Mgo ppm
              </Typography>
              <Typography className={classes.tableD} align="center">
                0,12
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                CaO ppm
              </Typography>
              <Typography className={classes.tableD} align="center">
                0,12
              </Typography>
            </Grid>
          </React.Fragment>
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <Grid container spacing={1} className={classes.gridcontainer}>
        <Grid container item xs={12} spacing={3} className={classes.griditem}>
          <React.Fragment>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                h1. Heading
              </Typography>
              <Typography className={classes.tableD} align="center">
                -
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                h1. Heading
              </Typography>
              <Typography className={classes.tableD} align="center">
                -
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                h1. Heading
              </Typography>
              <Typography className={classes.tableD} align="center">
                -
              </Typography>
            </Grid>
          </React.Fragment>
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <Grid container spacing={1} className={classes.gridcontainer}>
        <Grid container item xs={12} spacing={3} className={classes.griditem}>
          <React.Fragment>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                h1. Heading
              </Typography>
              <Typography className={classes.tableD} align="center">
                -
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                h1. Heading
              </Typography>
              <Typography className={classes.tableD} align="center">
                -
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.tableH} align="center">
                h1. Heading
              </Typography>
              <Typography className={classes.tableD} align="center">
                -
              </Typography>
            </Grid>
          </React.Fragment>
        </Grid>
      </Grid>
    </div>
  );
}
