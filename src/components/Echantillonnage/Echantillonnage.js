import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import EchantillonnageHeader from "../Echantillonnage/EchantillonnageHeader";
import FilterMenu from "../Filter/FilterMenu";
import EchantillonnageCard from "../Echantillonnage/EchantillonnageCard";

const useStyles = makeStyles(theme => ({
  toolbar: {
    marginTop: 70
  }
}));

export const Analyse = props => {
  const classes = useStyles();
  return (
    <div className={classes.toolbar}>
      <EchantillonnageHeader />
      <FilterMenu />
      <EchantillonnageCard />
    </div>
  );
};

export default connect()(Analyse);
