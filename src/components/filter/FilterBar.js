import React from "react";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  InputBase,
  MenuItem,
  Menu,
  Button,
  ListItemIcon,
  ListItemText,
  CssBaseline
} from "@material-ui/core";

import Checkbox from "@material-ui/core/Checkbox";

import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import FilterList from "@material-ui/icons/FilterList";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  appbar: {
    boxShadow: "none",
    height: "132px",
    marginTop: "154px",
    backgroundColor: "transparent"
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.85)
    },
    marginTop: 38,
    marginRight: theme.spacing(2),
    marginLeft: "auto",
    width: "100%"
  },
  arrowIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#606060"
  },
  searchIcon: {
    paddingLeft: "98%",
    width: theme.spacing(7),
    color: "#606060",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    width: "1009px",
    height: "55px",
    borderTopRightRadius: "8px"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 3),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      borderRadius: "8px"
    }
  },
  toutIcon: {
    color: "#39a393"
  },
  extendedIcon: {
    color: "#606060"
  },
  filtersbutton: {
    marginTop: 38,
    marginLeft: 10,
    borderRadius: "8px",
    color: "#2c2c2c",
    width: "124px",
    height: "55px",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.85)
    }
  },
  toutbutton: {
    marginTop: 38,
    marginLeft: 21,
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
    color: "#2c2c2c",
    width: "186px",
    height: "55px",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.85)
    }
  }
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [state, setState] = React.useState({
    checkedB: ""
  });

  function handleClickTout(event) {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleRechercheClick(event) {
    event.stopPropagation();
  }

  const handleCheckBoxChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    event.stopPropagation();
  };

  function handleClickCheckbox(e) {
    e.stopPropagation();
  }

  // function handleFiltersClick(event) {
  //   event.startProgation();
  // }

  return (
    <div className={classes.grow}>
      <CssBaseline />
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Button className={classes.toutbutton} onClick={handleClickTout}>
            Tout
            <KeyboardArrowDown className={classes.toutIcon} />
          </Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={e => handleClickCheckbox(e)}>
              <ListItemIcon>
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleCheckBoxChange("checkedA")}
                  value="checkedA"
                  color="primary"
                  inputProps={{
                    "aria-label": "secondary checkbox"
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Tout" />
            </MenuItem>
            <MenuItem onClick={e => handleClickCheckbox(e)}>
              <ListItemIcon>
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleCheckBoxChange("checkedB")}
                  value="checkedB"
                  color="primary"
                  inputProps={{
                    "aria-label": "secondary checkbox"
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Id Echantillon" />
            </MenuItem>
            <MenuItem onClick={e => handleClickCheckbox(e)}>
              <ListItemIcon>
                <Checkbox
                  checked={state.checkedC}
                  onChange={handleCheckBoxChange("checkedC")}
                  value="checkedC"
                  color="primary"
                  inputProps={{
                    "aria-label": "secondary checkbox"
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="CIN" />
            </MenuItem>
            <MenuItem onClick={e => handleClickCheckbox(e)}>
              <ListItemIcon>
                <Checkbox
                  checked={state.checkedD}
                  onChange={handleCheckBoxChange("checkedD")}
                  value="checkedD"
                  color="primary"
                  inputProps={{
                    "aria-label": "secondary checkbox"
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Agriculteur" />
            </MenuItem>
          </StyledMenu>
          <div className={classes.search} onClick={handleRechercheClick}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Recherche..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "recherche" }}
            />
          </div>
          <div className={classes.grow}>
            <Button
              className={classes.filtersbutton}
              // onClick={handleFiltersClick}
            >
              <FilterList className={classes.extendedIcon} />
              Filters
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
