import React from 'react';
import '@atlaskit/css-reset'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import './App.css';
import Authenticate from "features/auth/Authenticate";
import {useSelector} from "react-redux";
import {RootState} from "store/rootReducer";
import LoginLayout from "layouts/login";
import DashboardLayout from "layouts/dashboard";
import DashboardHome from "features/dashboard/dashboard-home";
import DashboardAnalytics from "features/dashboard/dashboard-analytics";
function AppRouter() {
    const {
        authenticated,
    } = useSelector((state: RootState) => state.auth);
    const nonAuthLayout = () => {
        return (
            <LoginLayout>
                <Router>
                    <Route extract path="/" children={<Authenticate />} />
                </Router>
            </LoginLayout>
        )
    };
    const authLayout = () => {
        return (
            <DashboardLayout>
                <Router>
                    <Route extract path="/" children={<DashboardHome />} />
                    <Route path="/home" children={<DashboardHome />} />
                    <Redirect to={{
                        pathname: "/home",
                    }}/>
                    <Route path="/analytics" children={<DashboardAnalytics />} />
                </Router>
            </DashboardLayout>
        )
    };
    return (
        !authenticated ? nonAuthLayout() : authLayout()
    );
}

export default AppRouter;
