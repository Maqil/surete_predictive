import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tab,
  Tabs,
  Card,
  CardContent
} from "@material-ui/core";

import EchantillonnageTable from "./EchantillonnageTable";

import { fetchEchantillonnages } from "../../actions/searchActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";

import PhoneIphone from "@material-ui/icons/PhoneIphone";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  appbar: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 115,
    background: "#f3f7fd",
    boxShadow: "none"
  },

  // Card
  card: {
    width: 227,
    height: 75,
    borderRadius: 8,
    boxShadow: "none",
    // boxShadow: "-10px 10px 20px 0 rgba(30, 30, 30, 0.05)",
    backgroundColor: "white"
  },
  title: {
    width: 160,
    fontSize: 12,
    fontWeight: "500",
    color: "#4a4a4a"
  },
  nbrech: {
    width: 160,
    opacity: "0.6",
    fontSize: 14,
    color: "#4a4a4a"
  },
  encours: {
    fontSize: 12,
    fontWeight: "500",
    color: "#4db486"
  },
  spacer: {
    flex: "1 1 100%"
  },
  phoneicon: {
    width: 42,
    height: 42,
    opacity: "0.2",
    fill: "#929292"
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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

const StyledTabs = withStyles(theme => ({
  indicator: {
    backgroundColor: "transparent"
  }
}))(props => <Tabs {...props} />);

const StyledTab = withStyles(theme => ({
  root: {
    height: 110,
    paddingTop: "20px"
  },
  selected: {}
}))(props => <Tab {...props} />);

function EchantillonnageCard({ fetchEchantillonnages, echantillonnages }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const getEchantillonnage = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/echantillonnage`);
      fetchEchantillonnages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEchantillonnage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appbar} color="default">
        <Toolbar>
          <StyledTabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <StyledTab
              label={
                <Card className={classes.card}>
                  <CardContent>
                    <div style={{ display: "flex" }}>
                      <div style={{ display: "inline" }}>
                        <Typography className={classes.title}>
                          Aziz Bouderbala
                        </Typography>
                        <Typography className={classes.nbrech}>
                          48 échantillons
                        </Typography>
                        <Typography className={classes.encours}>
                          en cours
                        </Typography>
                      </div>
                      <div className={classes.spacer} />
                      <PhoneIphone className={classes.phoneicon} />
                    </div>
                  </CardContent>
                </Card>
              }
            />
            <StyledTab
              label={
                <Card className={classes.card}>
                  <CardContent>
                    <div style={{ display: "flex" }}>
                      <div style={{ display: "" }}>
                        <Typography className={classes.title}>
                          Aziz Bouderbala
                        </Typography>
                        <Typography className={classes.nbrech}>
                          48 échantillons
                        </Typography>
                        <Typography className={classes.encours}>
                          en cours
                        </Typography>
                      </div>
                      <div className={classes.spacer} />
                      <PhoneIphone className={classes.phoneicon} />
                    </div>
                  </CardContent>
                </Card>
              }
            />
            <StyledTab
              label={
                <Card className={classes.card}>
                  <CardContent>
                    <div style={{ display: "flex" }}>
                      <div style={{ display: "" }}>
                        <Typography className={classes.title}>
                          Aziz Bouderbala
                        </Typography>
                        <Typography className={classes.nbrech}>
                          48 échantillons
                        </Typography>
                        <Typography className={classes.encours}>
                          en cours
                        </Typography>
                      </div>
                      <div className={classes.spacer} />
                      <PhoneIphone className={classes.phoneicon} />
                    </div>
                  </CardContent>
                </Card>
              }
            />
            <StyledTab
              label={
                <Card className={classes.card}>
                  <CardContent>
                    <div style={{ display: "flex" }}>
                      <div style={{ display: "" }}>
                        <Typography className={classes.title}>
                          Aziz Bouderbala
                        </Typography>
                        <Typography className={classes.nbrech}>
                          48 échantillons
                        </Typography>
                        <Typography className={classes.encours}>
                          en cours
                        </Typography>
                      </div>
                      <div className={classes.spacer} />
                      <PhoneIphone className={classes.phoneicon} />
                    </div>
                  </CardContent>
                </Card>
              }
            />
            <StyledTab
              label={
                <Card className={classes.card}>
                  <CardContent>
                    <div style={{ display: "flex" }}>
                      <div style={{ display: "" }}>
                        <Typography className={classes.title}>
                          Aziz Bouderbala
                        </Typography>
                        <Typography className={classes.nbrech}>
                          48 échantillons
                        </Typography>
                        <Typography className={classes.encours}>
                          en cours
                        </Typography>
                      </div>
                      <div className={classes.spacer} />
                      <PhoneIphone className={classes.phoneicon} />
                    </div>
                  </CardContent>
                </Card>
              }
            />
            <StyledTab
              label={
                <Card className={classes.card}>
                  <CardContent>
                    <div style={{ display: "flex" }}>
                      <div style={{ display: "" }}>
                        <Typography className={classes.title}>
                          Aziz Bouderbala
                        </Typography>
                        <Typography className={classes.nbrech}>
                          48 échantillons
                        </Typography>
                        <Typography className={classes.encours}>
                          en cours
                        </Typography>
                      </div>
                      <div className={classes.spacer} />
                      <PhoneIphone className={classes.phoneicon} />
                    </div>
                  </CardContent>
                </Card>
              }
            />
            <StyledTab
              label={
                <Card className={classes.card}>
                  <CardContent>
                    <div style={{ display: "flex" }}>
                      <div style={{ display: "" }}>
                        <Typography className={classes.title}>
                          Aziz Bouderbala
                        </Typography>
                        <Typography className={classes.nbrech}>
                          48 échantillons
                        </Typography>
                        <Typography className={classes.encours}>
                          en cours
                        </Typography>
                      </div>
                      <div className={classes.spacer} />
                      <PhoneIphone className={classes.phoneicon} />
                    </div>
                  </CardContent>
                </Card>
              }
            />
            <StyledTab
              label={
                <Card className={classes.card}>
                  <CardContent>
                    <div style={{ display: "flex" }}>
                      <div style={{ display: "" }}>
                        <Typography className={classes.title}>
                          Aziz Bouderbala
                        </Typography>
                        <Typography className={classes.nbrech}>
                          48 échantillons
                        </Typography>
                        <Typography className={classes.encours}>
                          en cours
                        </Typography>
                      </div>
                      <div className={classes.spacer} />
                      <PhoneIphone className={classes.phoneicon} />
                    </div>
                  </CardContent>
                </Card>
              }
            />
          </StyledTabs>
        </Toolbar>
      </AppBar>
      <div className={classes.box}>
        <TabPanel value={value} index={0}>
          <EchantillonnageTable echantillonnages={echantillonnages} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          2
        </TabPanel>
        <TabPanel value={value} index={2}>
          3
        </TabPanel>
        <TabPanel value={value} index={3}>
          4
        </TabPanel>
        <TabPanel value={value} index={4}>
          5
        </TabPanel>
        <TabPanel value={value} index={5}>
          6
        </TabPanel>
        <TabPanel value={value} index={6}>
          7
        </TabPanel>
        <TabPanel value={value} index={7}>
          8
        </TabPanel>
        <TabPanel value={value} index={8}>
          9
        </TabPanel>
        <TabPanel value={value} index={9}>
          10
        </TabPanel>
        <TabPanel value={value} index={10}>
          11
        </TabPanel>
        <TabPanel value={value} index={11}>
          12
        </TabPanel>
        <TabPanel value={value} index={13}>
          13
        </TabPanel>
        <TabPanel value={value} index={14}>
          14
        </TabPanel>
      </div>
    </div>
  );
}

const mapState = state => ({
  echantillonnages: state.echantillonnages.echantillonnages
});
const mapDispatch = dispatch =>
  bindActionCreators({ fetchEchantillonnages }, dispatch);

export default connect(
  mapState,
  mapDispatch
)(EchantillonnageCard);
