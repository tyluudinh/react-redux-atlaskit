import React from 'react';
// import {useHistory} from "react-router";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LoginPage from "./login/Login";

const Authenticate = () => {
    // const history = useHistory);
    return (
        <Router>
            <Route exact path="/" children={<LoginPage />}/>
            <Route path="/login" children={<LoginPage />}/>
            {/*<Route path="/sign-up" component={SignUpScreen}/>*/}
        </Router>
    )
};

export default Authenticate;
