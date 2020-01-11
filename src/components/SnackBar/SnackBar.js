import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import CloseIcon from "@material-ui/icons/Close";

import CheckCirlce from "@material-ui/icons/CheckCircle";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import IconButton from "@material-ui/core/IconButton";
import { clearSnackbar } from "../../actions/snackbarActions";

const useStyles = makeStyles(theme => ({
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
    width: 188,
    marginTop: 6,
    fontSize: 12,
    lineHeight: 1.08,
    letterSpacing: 0.08,
    color: "rgba(74, 74, 74, 0.57)"
  },
  close: {
    color: "rgba(74, 74, 74, 0.57)"
  }
}));

export default function SuccessSnackbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    SnackbarMessage,
    SnackbarTitle,
    SnackbarOpen,
    SnackbarType
  } = useSelector(state => state.snackbar);

  const handleClose = () => {
    dispatch(clearSnackbar());
  };

  // so set statut color and width according to its value
  const snackbarStyle = SnackbarType => {
    switch (SnackbarType) {
      case "error":
        return "#ff647c";
      case "success":
        return "#00c48c";
      default:
        return "";
    }
  };

  // so set snackbar icon according to its value
  var SnackBarIcon;
  if (SnackbarType === "success") {
    SnackBarIcon = (
      <CheckCirlce style={{ width: 55, height: 55, fill: "#00c48c" }} />
    );
  } else if (SnackbarType === "error") {
    SnackBarIcon = (
      <CancelRoundedIcon style={{ width: 55, height: 55, fill: "#ff647c" }} />
    );
  }

  return (
    <Snackbar
      className={classes.snackbar}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={SnackbarOpen}
      autoHideDuration={4000}
      onClose={handleClose}
      ContentProps={{
        "aria-describedby": "message-id"
      }}
    >
      <SnackbarContent
        className={classes.snackbarcontent}
        // snackbarType the snackbarType state changes the color of the border
        style={{ borderLeft: "6px solid" + snackbarStyle(SnackbarType) }}
        message={
          <div>
            <div style={{ display: "flex" }}>
              {/* <CheckCirlce style={{ width: 55, height: 55, fill: "#00c48c" }} /> */}
              {SnackBarIcon}
              <div style={{ display: "inline", marginLeft: 20 }}>
                <span id="message-id" className={classes.snackbartitle}>
                  {SnackbarTitle}
                </span>
                <p className={classes.snackbartext}>{SnackbarMessage}</p>
              </div>
            </div>
          </div>
        }
        action={[
          <IconButton
            key="close"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </Snackbar>
  );
}
