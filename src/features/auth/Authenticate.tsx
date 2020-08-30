import React from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import LoginPage from "./login/Login";

const Authenticate = () => {
    return (
        <Router>
            <Route exact path="/" children={<LoginPage />}/>
            <Redirect to={{
                pathname: "/login",
            }}/>
            <Route path="/login" children={<LoginPage />}/>
        </Router>
    )
};

export default Authenticate;
