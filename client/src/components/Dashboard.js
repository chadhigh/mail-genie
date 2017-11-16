import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return <div>
  <h4>Dashboard</h4>
  <div className="fixed-action-btn">
    <Link to="/surveys/new"className="btn-floating btn-large blue">
      <i className="large material-icons">add</i>
    </Link>
  </div>
  </div>;
};

export default Dashboard;
