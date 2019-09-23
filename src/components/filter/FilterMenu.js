import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from "@material-ui/core";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FilterBar from "./FilterBar";
import Filters from "./Filters2";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  summary: {
    // backgroundImage:
    //   'url("https://media.istockphoto.com/photos/plant-growing-picture-id510222832?k=6&m=510222832&s=612x612&w=0&h=Pzjkj2hf9IZiLAiXcgVE1FbCNFVmKzhdcT98dcHSdSk=")'
    backgroundColor: "#0084f4"
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div>
      <ExpansionPanel className={classes.summary}>
        <ExpansionPanelSummary>
          <FilterBar />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Filters />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
