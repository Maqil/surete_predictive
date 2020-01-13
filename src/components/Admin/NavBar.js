import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { useHistory } from "react-router-dom";

import DashboardIcon from "@material-ui/icons/Dashboard";
import RoomIcon from "@material-ui/icons/Room";

export default function NavBar(props) {
  let history = useHistory();
  return (
    <List>
      <div>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <RoomIcon />
          </ListItemIcon>
          <ListItemText
            primary="Map"
            onClick={event => {
              history.push("/map");
            }}
          />
        </ListItem>
      </div>
    </List>
  );
}
