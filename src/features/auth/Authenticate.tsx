import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoginPage from "./login/Login";

const Authenticate = () => {
    return (
        <Router>
            <Route exact path="/" children={<LoginPage />}/>
            <Route path="/login" children={<LoginPage />}/>
        </Router>
    )
};

export default Authenticate;
