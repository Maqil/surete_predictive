import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/NotificationsNone";
import AgriAnalyse from "../../img/agri-analyse.png";
// import SFUIText from "../../fonts/SFUIText-Bold.tff";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
  Box,
  Tab,
  Tabs
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  appbar: {
    background: "white",
    boxShadow: "none"
  },
  title: {
    color: "black",
    display: "block"
  },
  logo: {
    width: 128,
    height: 32,
    resizeMode: "contain"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "flex"
  },
  divider: {
    borderRight: "0.001em solid #2b3034",
    padding: "0.5em",
    Height: 24.3
  },
  bigIndicator: {
    width: "76px",
    height: "4px",
    backgroundColor: "#0084f4"
  },
  user: {
    width: "36px",
    height: "14px",
    // fontFamily: "SFProText",
    fontSize: "12px",
    fontWeight: 500,
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    // textAlign: "right",
    color: "#4b74ff",
    marginLeft: "auto",
    marginRight: 0
  },
  adminlabo: {
    width: "56px",
    height: "12px",
    opacity: "0.8",
    // fontFamily: "SFProText",
    fontSize: "10px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    // textAlign: "right",
    color: "#4a4a4a",
    marginLeft: "auto",
    marginRight: 0
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`
  };
}

const StyledTabs = withStyles(theme => ({
  indicator: {
    height: "4px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > div": {
      width: "76px",
      backgroundColor: "#0084f4"
    }
  }
}))(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    paddingTop: "22px",
    textTransform: "initial",
    color: "#4a4a4a",
    fontWeight: 500,
    fontFamily: "SFUIText",
    fontSize: "12px",
    "&$selected": {
      color: "#6979f8"
    }
    // marginRight: theme.spacing.unit * 1
  },
  selected: {}
}))(props => <Tab disableRipple {...props} />);

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(0);
  // const theme = useTheme();
  // const [setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  // function handleMobileMenuClose() {
  //   setMobileMoreAnchorEl(null);
  // }

  function handleMenuClose() {
    setAnchorEl(null);
    // handleMobileMenuClose();
  }

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}

      <MenuItem>Profile</MenuItem>
      <MenuItem>Sign out</MenuItem>
    </Menu>
  );

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  // function handleChangeIndex(index) {
  //   setValue(index);
  // }

  // const transitionDuration = {
  //   enter: theme.transitions.duration.enteringScreen,
  //   exit: theme.transitions.duration.leavingScreen
  // };

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <img src={AgriAnalyse} alt="agrianalyse" className={classes.logo} />
          <Typography
            style={{
              borderRight: "0.001em solid #2b3034",
              opacity: 0.1,
              Height: 70,
              padding: "1.3em"
            }}
          ></Typography>
          <StyledTabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
            classes={{ indicator: classes.bigIndicator }}
          >
            <StyledTab label="Echantillonnage" {...a11yProps(0)} />
            <StyledTab label="Analyses" {...a11yProps(1)} />
            <StyledTab label="Objets" {...a11yProps(2)} />
          </StyledTabs>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={13} color="secondary">
                <NotificationsIcon color="action" />
              </Badge>
            </IconButton>
            <Typography className={classes.divider}></Typography>
            <Typography component={"span"}>
              <div style={{ width: "110px", paddingTop: "12px" }}>
                <div className={classes.user}>UM6P</div>
                <div className={classes.adminlabo}>Admin Labo</div>
              </div>
            </Typography>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="default"
            >
              <AccountCircle style={{ color: "#ffb74d" }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
