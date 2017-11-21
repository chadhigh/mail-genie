import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return <div className="container" style={{textAlign: 'center'}}>
  <h4>Dashboard</h4>

    <Link to="/surveys/new"className="btn-floating btn-large right green">
      <i className="large material-icons">add</i>
    </Link>

</div>
};

export default Dashboard;
