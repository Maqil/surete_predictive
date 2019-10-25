import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AnalyseTable from "./AnalyseTable";
import { AppBar, Typography, Box, Tabs, Tab } from "@material-ui/core";
import { ReactComponent as OvalBlueSvg } from "../../layouts/img/ovalblue.svg";
import { ReactComponent as OvalSkySvg } from "../../layouts/img/ovalsky.svg";
import { ReactComponent as OvalOrangeSvg } from "../../layouts/img/ovalorange.svg";
import { ReactComponent as OvalGreenSvg } from "../../layouts/img/ovalgreen.svg";
import { fetchAnalyses } from "../../actions/searchActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";

const useStyles = makeStyles({
  container: {
    background: "#f3f7fd"
  },
  appbar: {
    // width: 1337,
    marginLeft: 52,
    marginRight: 50,
    height: 55,
    margin: "auto",
    background: "white",
    boxShadow: "none",
    overflow: "auto"
  }
});

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
      width: "185px",
      backgroundColor: "#0084f4",
      borderRadius: 2
    }
  }
}))(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    paddingTop: "10px",
    textTransform: "initial",
    color: "#4a4a4a",
    fontWeight: "500",
    fontFamily: "SFUIText",
    fontSize: "12px",
    "&$selected": {
      color: "black"
    }
  },
  selected: {}
}))(props => <Tab disableRipple {...props} />);

function AnalysesBar({ fetchAnalyses, analyses }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getAnalyses = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/analyse`);
      fetchAnalyses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAnalyses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.container}>
      <AppBar position="static" className={classes.appbar}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
          classes={{ indicator: classes.bigIndicator }}
        >
          <StyledTab
            icon={
              <OvalBlueSvg
                style={{
                  display: "inline-block",
                  marginBottom: "-14px",
                  marginRight: "165px"
                }}
              />
            }
            label={"Toutes analyses (" + analyses.length + ")"}
            {...a11yProps(0)}
          />
          <StyledTab
            icon={
              <OvalSkySvg
                style={{
                  display: "inline-block",
                  marginBottom: "-14px",
                  marginRight: "205px"
                }}
              />
            }
            label="En attente d’affectation (4)"
            {...a11yProps(1)}
          />
          <StyledTab
            icon={
              <OvalOrangeSvg
                style={{
                  display: "inline-block",
                  marginBottom: "-14px",
                  marginRight: "115px"
                }}
              />
            }
            label="En cours (5)"
            {...a11yProps(2)}
          />
          <StyledTab
            icon={
              <OvalGreenSvg
                style={{
                  display: "inline-block",
                  marginBottom: "-14px",
                  marginRight: "115px"
                }}
              />
            }
            label=" Terminés (3)"
            {...a11yProps(3)}
          />
        </StyledTabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AnalyseTable analyses={analyses} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AnalyseTable analyses={analyses} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AnalyseTable analyses={analyses} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AnalyseTable analyses={analyses} />
      </TabPanel>
    </div>
  );
}
// const mapState = state => {
//   return {
//     analyses: state.analyses.text
//   };
// };
const mapState = (state, ownProps) => ({
  analyses: state.analyses.analyses
});
const mapDispatch = dispatch => bindActionCreators({ fetchAnalyses }, dispatch);

export default connect(
  mapState,
  mapDispatch
)(AnalysesBar);
