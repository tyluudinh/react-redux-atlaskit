import React from 'react';
import '@atlaskit/css-reset'
import './App.css';
import Authenticate from "features/auth/Authenticate";
import {useSelector} from "react-redux";
import {RootState} from "store/rootReducer";
import LoginLayout from "layouts/login";
import MainLayout from "layouts/main";
import DashboardRouter from "features/dashboard/router";
function AppRouter() {
    const {
        authenticated,
    } = useSelector((state: RootState) => state.auth);
    const nonAuthLayout = () => {
        return (
            <LoginLayout>
                <Authenticate />
            </LoginLayout>
        )
    };
    const authLayout = () => {
        return (
            <MainLayout>
                <DashboardRouter />
            </MainLayout>
        )
    };
    return (
        !authenticated ? nonAuthLayout() : authLayout()
    );
}

export default AppRouter;
