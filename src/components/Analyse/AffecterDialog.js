import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import {
  Typography,
  Paper,
  Button,
  Dialog,
  DialogContent,
  MenuItem
} from "@material-ui/core";

import LinearProgress from "@material-ui/core/LinearProgress";
import HistoryIcon from "@material-ui/icons/History";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// SnackBar
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CheckCirlce from "@material-ui/icons/CheckCircle";

import AffecterPng from "../../layouts/img/affecter.png";

const useToolbarStyles = makeStyles(theme => ({
  // For Felecitations dialog
  dialogF: {
    width: 600,
    height: 650,
    borderradius: 9
  },
  headertxt: {
    fontSize: 30,
    fontWeight: "300",
    textAlign: "center",
    color: "#4a4a4a"
  },
  subtxt: {
    marginTop: 34,
    fontSize: 14,
    letterSpacing: 0.09,
    color: "#4a4a4a"
  },
  buttonok: {
    width: 158,
    height: 48,
    marginTop: 42,
    margin: theme.spacing(1),
    color: "white",
    backgroundColor: "#0084f4",
    borderRadius: 6,
    "&:hover": {
      backgroundColor: "#0084f4"
    }
  },
  buttonannuler: {
    width: 158,
    height: 48,
    marginTop: 10,
    margin: theme.spacing(1),
    boxShadow: "none",
    color: "#008cf2",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#66b5f8",
      color: "white"
    }
  },
  spacer: {
    flex: "1 1 100%"
  },

  // progress with form control
  wrapper: {
    width: 328,
    height: 90,
    marginTop: 8,
    marginLeft: 112
  },
  paperpropgress: {
    padding: theme.spacing(3, 2),
    borderRadius: 8,
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.07)"
  },
  formControl: {
    margin: theme.spacing(1),
    width: 328,
    height: 48,
    borderRadius: 6,
    backgroundColor: "white"
  },
  info: {
    marginLeft: 19
  },
  lot: {
    marginTop: -12,
    fontSize: 12,
    color: "#4a4a4a"
  },
  propgressbar: {
    marginTop: -10
  },
  countervalue: {
    fontSize: 12,
    fontWeight: "500",
    color: "#66b5f8"
  },
  countermax: {
    fontSize: 12,
    fontWeight: "500",
    color: "#9b9b9b"
  },

  // SnackBar
  snackbar: {
    marginTop: 60
  },
  snackbarcontent: {
    width: 380,
    height: 85,
    borderRadius: 4,
    boxShadow: "0 2px 14px 0 rgba(0, 0, 0, 0.08)",
    backgroundColor: "white"
  },
  snackbartitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#243b6b"
  },
  snackbartext: {
    fontSize: 12,
    lineHeight: 1.08,
    letterSpacing: 0.08,
    color: "rgba(74, 74, 74, 0.57)"
  },
  close: {
    color: "rgba(74, 74, 74, 0.57)",
    marginTop: -110
  }
}));

const BorderLinearProgress = withStyles({
  root: {
    width: 212,
    height: 10,
    backgroundColor: "#e0f0fe"
  },
  bar: {
    backgroundColor: "#66b5f8"
  }
})(LinearProgress);

export default function AffecterDialog(props) {
  const classes = useToolbarStyles();
  const [open, setOpen] = React.useState(true);
  const [state, setState] = React.useState({
    lot: "LOT_Drâ_tafilalt",
    name: "",
    openSnack: false,
    vertical: "top",
    horizontal: "center"
  });
  const { vertical, horizontal, openSnack } = state;

  const handleLotChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  const handleCloseAffecter = () => {
    setOpen(false);
  };

  // SnackBar
  const handleClickSnack = newState => () => {
    setOpen(false);
    setState({ openSnack: true, ...newState });
  };

  const handleCloseSnack = () => {
    setState({ ...state, openSnack: false });
  };

  return (
    <div>
      <div>
        <Snackbar
          className={classes.snackbar}
          anchorOrigin={{ vertical, horizontal }}
          key={`${vertical},${horizontal}`}
          autoHideDuration={6000}
          open={openSnack}
          onClose={handleCloseSnack}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
        >
          <SnackbarContent
            className={classes.snackbarcontent}
            message={
              <div>
                <div style={{ display: "flex" }}>
                  <CheckCirlce
                    style={{ width: 55, height: 55, fill: "#00c48c" }}
                  />
                  <div style={{ display: "inline", marginLeft: 20 }}>
                    <span id="message-id" className={classes.snackbartitle}>
                      Félicitation
                    </span>
                    <p className={classes.snackbartext}>
                      Votre affectation est accomplie avec succès.
                    </p>
                  </div>
                </div>
              </div>
            }
            action={[
              <IconButton className={classes.close} onClick={handleCloseSnack}>
                <CloseIcon />
              </IconButton>
            ]}
          />
        </Snackbar>
      </div>
      <Dialog open={open} onClose={handleCloseAffecter}>
        <DialogContent className={classes.dialogF}>
          <Typography align="center">
            <img src={AffecterPng} alt="done" />
          </Typography>
          <Typography align="center" className={classes.headertxt}>
            Affectation de 25 échantillions
          </Typography>
          <Typography align="center" className={classes.subtxt}>
            Choisir un lot déstinataire
          </Typography>
          <Typography align="center">
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                value={state.lot}
                onChange={handleLotChange("lot")}
                inputProps={{
                  name: "lot",
                  id: "outlined-lot-native-simple"
                }}
              >
                <MenuItem value={"LOT_Drâ_tafilalt"}>
                  LOT_Drâa_tafilalt
                </MenuItem>
                <MenuItem value={"LOT_Two"}>LOT_Two</MenuItem>
                <MenuItem value={"LOT_Three"}>LOT_Three</MenuItem>
              </Select>
            </FormControl>
          </Typography>
          <div className={classes.wrapper}>
            <Paper className={classes.paperpropgress}>
              <div style={{ display: "flex" }}>
                <HistoryIcon style={{ width: 55, height: 55 }} />
                <div style={{ display: "inline" }} className={classes.info}>
                  <p className={classes.lot}>{state.lot}</p>
                  <div>
                    <div
                      style={{ display: "flex" }}
                      className={classes.propgressbar}
                    >
                      <p className={classes.countervalue}>120</p>
                      <div className={classes.spacer} />
                      <p className={classes.countermax}>250</p>
                    </div>
                    <BorderLinearProgress variant="determinate" value={35} />
                  </div>
                </div>
              </div>
            </Paper>
          </div>
          <Typography align="center">
            <Button
              onClick={handleClickSnack({
                vertical: "top",
                horizontal: "right"
              })}
              // onClick={handleCloseAffecter}
              variant="contained"
              className={classes.buttonok}
            >
              AFFECTER
            </Button>
          </Typography>
          <Typography align="center">
            <Button
              onClick={handleCloseAffecter}
              variant="contained"
              className={classes.buttonannuler}
            >
              ANNULER
            </Button>
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
