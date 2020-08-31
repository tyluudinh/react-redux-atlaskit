import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import DashboardHome from "./dashboard-home";
import DashboardAnalytics from "./dashboard-analytics";

const DashboardRouter = () => {
    return (
        <Router>
            <Route exact path="/" children={<DashboardHome />}/>
            <Route path="/home" children={<DashboardHome />}/>
            <Route path="/analytics" children={<DashboardAnalytics />}/>
        </Router>
    )
};
export default DashboardRouter;
