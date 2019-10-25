import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Toolbar, CssBaseline } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 85,
    boxShadow: "none",
    background: "#f3f7fd",
    marginTop: 70
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
  }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Paper className={classes.root}>
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
          {/* <div className={classes.search}>
            <Button variant="contained" className={classes.button}>
              nouvel échantillon
            </Button>
          </div> */}
        </Toolbar>
      </Paper>
    </div>
  );
}
