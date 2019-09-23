import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appbar: {
    background: "#f3f7fd",
    boxShadow: "none",
    height: "90px",
    marginTop: "64px"
  },
  content: {
    paddingTop: "50px"
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    color: "#243b6b",
    marginLeft: "59px"
  },
  typedesc: {
    width: "244px",
    height: "14px",
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#9b9b9b"
  },
  button: {
    marginTop: "20px",
    width: "244px",
    height: "48px",
    borderRadius: 6,
    backgroundColor: "#0084f4",
    color: "white"
    // "&:hover": {
    //   backgroundColor: fade(theme.palette.common.white, 0.5)
    // }
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className="content">
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            component={"span"}
          >
            <div style={{ width: "110px", paddingTop: "12px" }}>
              <div>Analyses(375)</div>
              <div className={classes.typedesc}>
                Le Lorem Ipsum est simplement du faux texte
              </div>
            </div>
          </Typography>
          <div className={classes.search}>
            <Button variant="contained" className={classes.button}>
              nouvel échantillon
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
