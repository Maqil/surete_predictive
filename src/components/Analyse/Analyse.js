import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AnalyseHeader from "./AnalyseHeader";
import FilterMenu from "../Filter/FilterMenu";
import AnalysesBar from "../Analyse/AnalysesBar";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar
}));

export const Analyse = props => {
  const classes = useStyles();
  return (
    <div className={classes.toolbar}>
      <AnalyseHeader />
      <FilterMenu />
      <AnalysesBar />
    </div>
  );
};

export default connect()(Analyse);
