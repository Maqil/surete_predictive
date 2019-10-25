import React from "react";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import AnalyseRequirements from "./AnalyseRequirements";

import {
  AppBar,
  Divider,
  Typography,
  Toolbar,
  Box,
  Tab,
  Tabs,
  Paper
} from "@material-ui/core";

import AnalysePng from "../../layouts/img/analysedetail/analyse.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 20,
    background: "#f3f7fd"
  },
  paper: {
    marginLeft: 50,
    marginRight: 50,
    // boxShadow: "inset 0 -1px 0 0 rgba(208, 201, 214, 0.4)",
    overflowX: "hide"
  },
  heading: {
    width: 400,
    marginTop: 39,
    marginLeft: 29,
    fontSize: 20,
    fontWeight: "500",
    lineHeight: "1.4",
    color: "#243b6b"
  },
  title: {
    width: 73,
    height: 28,
    marginTop: 17,
    marginLeft: 15,
    fontSize: 20,
    fontWeight: "500",
    lineHeight: "1.4",
    color: "#243b6b"
  },
  spacer: {
    flex: "1 1 100%"
  },
  gridcontainer: {
    height: 75
  },
  griditem: {
    marginTop: 10
  },
  htype: {
    width: 400,
    marginTop: 10
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
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
  },
  grow: {
    flexGrow: 1
  },
  appbar: {
    background: "white",
    boxShadow: "none",
    minHeight: 70
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
    height: 40,
    color: "#1a051d",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > div": {
      width: "96px",
      backgroundColor: "#0084f4",
      borderRadius: 20
    }
  }
}))(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    paddingTop: 10,
    zIndex: "2",
    textTransform: "initial",
    color: "#1a051d",
    fontWeight: 500,
    fontFamily: "SFUIText",
    fontSize: "12px",
    "&$selected": {
      color: "white"
    }
  },
  selected: {}
}))(props => <Tab disableRipple {...props} />);

export default function NestedGrid() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div style={{ display: "flex" }}>
          <img src={AnalysePng} alt="analyse" />
          <Typography className={classes.title}>Analyses</Typography>
        </div>
        <Divider />
        <div style={{ display: "flex" }}>
          <Typography className={classes.heading}>Objets demandées</Typography>
          <div className={classes.spacer} />
          <div className={classes.htype}>
            <div className={classes.grow}>
              <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                  <StyledTabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="action tabs example"
                  >
                    <StyledTab label="H1" {...a11yProps(0)} />
                    <StyledTab label="H2" {...a11yProps(1)} />
                  </StyledTabs>
                </Toolbar>
              </AppBar>
            </div>
          </div>
        </div>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <AnalyseRequirements />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <AnalyseRequirements />
        </TabPanel>
      </Paper>
    </div>
  );
}
