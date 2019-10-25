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

import {
  searchAnalyse,
  searchAnalyses,
  setLoading
} from "../../actions/searchActions";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  appbar: {
    borderTopRightRadius: "0px",
    borderTopLeftRadius: "0px",
    boxShadow: "none",
    height: "132px",
    backgroundColor: "transparent"
    // "&:active": {
    //   backgroundColor: "green"
    // }
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
    // "&:active": {
    //   backgroundColor: fade(theme.palette.common.white, 0.85)
    // },
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

function PrimarySearchAppBar(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [state, setState] = React.useState({});

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

  function handleSearchChange(event) {
    props.searchAnalyse(event.target.value);
    // props.fetchAnalyses(props.text);
    // props.setLoading();
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      props.searchAnalyses(props.text);
      props.setLoading();
    }
  }

  // function handleKeyPress(event) {
  //   if (event.key === "Enter") {
  //     event.preventDefault();

  //     let data = JSON.stringify({
  //       text: props.text
  //     });

  //     fetch("http://localhost:8000/search", {
  //       method: "post",
  //       headers: { "content-Type": "application/json" },
  //       body: data
  //     })
  //       .then(res => res.json())
  //       .then(result => {
  //         if (result.success === false) {
  //           alert("Can't find \n");
  //         } else if (result.success === true) {
  //           alert("Found it");
  //         }
  //       });
  //   }
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
              onChange={handleSearchChange}
              placeholder="Recherche..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "recherche" }}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className={classes.grow}>
            <Button className={classes.filtersbutton}>
              <FilterList className={classes.extendedIcon} />
              Filters
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => ({
  text: state.analyses.text
});

export default connect(
  mapStateToProps,
  { searchAnalyse, searchAnalyses, setLoading }
)(PrimarySearchAppBar);
