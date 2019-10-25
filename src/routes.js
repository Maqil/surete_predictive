import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import Home from "./components/Home/Home";
import { AnalyseDetail } from "./components/Analyse/AnalyseDetail";

import LabHome from "./components/Home/LabHome";

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={LoginPage} />
      <Route path="/home" component={Home} />
      {/* <Route path="/details" component={AnalyseDetail} /> */}
      {/* <Route path="/home" component={LabHome} /> */}
    </Router>
  );
}

export default AppRouter;
