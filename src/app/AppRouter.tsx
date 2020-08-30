import React from 'react';
import '@atlaskit/css-reset'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Authenticate from "../features/auth/Authenticate";
function AppRouter() {
  return (
    <Router>
        <Route extract path="/" children={<Authenticate />} />
    </Router>
  );
}

export default AppRouter;
