import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/NotificationsNone";
import AgriAnalyse from "../../layouts/img/agri-analyse.png";
import { ReactComponent as DashboardSvg } from "../../layouts/img/dashboard.svg";
import { ReactComponent as AnalyseSvg } from "../../layouts/img/analyse.svg";
import { ReactComponent as LotsSvg } from "../../layouts/img/lots.svg";
import Echantillonnage from "../Echantillonnage/Echantillonnage";

// import AnalyseDetail from "../Analyse/AnalyseDetail";
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
  appbar: {
    background: "white",
    boxShadow: "none",
    minHeight: 70
  },
  // icon: {
  //   "&$selected": {
  //     backgroundColor: "blue"
  //   }
  // },
  logo: {
    width: 128,
    height: 32,
    resizeMode: "contain"
  },
  sectionDesktop: {
    display: "flex"
  },
  divider: {
    borderRight: "0.001em solid #2b3034",
    padding: "0.5em",
    Height: 24.3
  },
  user: {
    width: 109,
    height: "14px",
    // fontFamily: "SFProText",
    fontSize: 14,
    fontWeight: 500,
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "right",
    color: "#4b74ff",
    marginLeft: "auto"
    // marginRight: -52
  },
  admin: {
    width: 75,
    height: 11,
    opacity: "0.8",
    // fontFamily: "SFProText",
    fontSize: "10px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "right",
    color: "#4a4a4a",
    marginLeft: "auto"
    // marginRight: -16
  },
  accounticon: {
    width: 30,
    height: 30,
    color: "#ffb74d"
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
      <Box>{children}</Box>
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
      width: "96px",
      backgroundColor: "#0084f4",
      borderRadius: 2
    }
  }
}))(props => (
  <Tabs
    {...props}
    variant="scrollable"
    scrollButtons="on"
    indicatorColor="primary"
    TabIndicatorProps={{ children: <div /> }}
  />
));

const StyledTab = withStyles(theme => ({
  root: {
    paddingTop: "10px",
    textTransform: "initial",
    color: "#4a4a4a",
    fontWeight: 500,
    fontFamily: "SFUIText",
    fontSize: "12px",
    "&$selected": {
      color: "black"
    }
  },
  selected: {}
}))(props => <Tab disableRipple {...props} />);

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(0);

  const isMenuOpen = Boolean(anchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
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
      <MenuItem>Profile</MenuItem>
      <MenuItem>Sign out</MenuItem>
    </Menu>
  );

  function handleChange(event, newValue) {
    setValue(newValue);
  }
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
          >
            <StyledTab
              icon={<DashboardSvg />}
              label="Echantillonnage"
              {...a11yProps(0)}
            />
            <StyledTab
              icon={<AnalyseSvg />}
              label="Analyses"
              {...a11yProps(1)}
            />
            <StyledTab icon={<LotsSvg />} label="Objects" {...a11yProps(2)} />
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
              <div style={{ width: 170, paddingTop: 12 }}>
                <div className={classes.user}>UM6P</div>
                <div className={classes.admin}>Web Lab</div>
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
              <AccountCircle className={classes.accounticon} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <TabPanel value={value} index={0}>
        <Echantillonnage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Analyses
      </TabPanel>
      <TabPanel value={value} index={2}>
        Objets
      </TabPanel>
    </div>
  );
}
