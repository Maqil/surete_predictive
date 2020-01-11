import React from "react";
import { Router, Route, Switch } from "react-router-dom";
// import { Router, Route, Switch } from "react-router-dom";
import { history } from "./helpers";
import LoginPage from "./components/Login/LoginPage";

import { connect } from "react-redux";

import SnackBar from "./components/SnackBar/SnackBar";
import Dashboard from "./components/Admin/Dashboard";
import Map from "./components/Admin/Map";

const NoMatch = ({ location }) => (
  <div>
    <h3>
      Erreur 404: the path <code>{location.pathname}</code> is not defined
    </h3>
  </div>
);

function AppRouter(props) {
  // console.log(props.user.groups);
  return (
    <div>
      <SnackBar />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/admin" component={Dashboard} />
          <Route exact path="/map" component={Map} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    user:
      typeof state.auth.user === "string"
        ? JSON.parse(state.auth.user)
        : state.auth.user
  };
}

export default connect(mapStateToProps)(AppRouter);
