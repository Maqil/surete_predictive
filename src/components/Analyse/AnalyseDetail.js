import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AnalyseAnalyse from "../Analyse/AnalyseAnalyse";
import AnalyseParcelle from "../Analyse/AnalyseParcelle";
import AnalyseInfo from "../Analyse/AnalyseInfo";

const useStyles = makeStyles(theme => ({
  toolbar: {
    marginTop: 70
  }
}));

export const AnalyseDetail = props => {
  const classes = useStyles();

  return (
    <div className={classes.toolbar}>
      <AnalyseInfo />
      <AnalyseParcelle />
      <AnalyseAnalyse />
    </div>
  );
};

export default connect()(AnalyseDetail);
