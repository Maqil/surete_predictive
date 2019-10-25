import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from "@material-ui/core";
import FilterSearch from "./FilterSearch";
import { connect } from "react-redux";
// import AnalyseTable from "../Analyse/AnalyseTable";
// import Spinner from "../../layouts/spinner/Spinner";
import FiltersForm from "./FiltersForm";
import showResults from "../Analyse/showResults";
// import AnalysesBar from "../Analyse/AnalysesBar";

// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  summary: {
    // backgroundImage:
    //   'url("https:")'
    backgroundColor: "#0084f4"
    // paddingTop: 70
  }
}));

function FilterMenu(props) {
  const classes = useStyles();
  return (
    <div>
      <ExpansionPanel className={classes.summary}>
        <ExpansionPanelSummary>
          <FilterSearch />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FiltersForm onSubmit={showResults} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {/* <AnalysesBar /> */}

      {/* {loading ? <Spinner /> : <AnalysesTable analyses={analyses} />} */}
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.analyses.loading,
  analyses: state.analyses.analyses
});
export default connect(mapStateToProps)(FilterMenu);
