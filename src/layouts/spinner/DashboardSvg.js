import React from "react";
import dashboard from "../img/dashboard.svg";

const DashboardSvg = props => (
  <svg src={dashboard} fill={props.fill} className={props.class}></svg>
);
export default DashboardSvg;
