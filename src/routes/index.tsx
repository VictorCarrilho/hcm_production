import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import RouteWrapper from './Route';

/* Screens */
import SignIn from '../pages/Login';
import Home from '../pages/Home';



function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <RouteWrapper component={Home} path="/" exact isPrivate={true} />
                <RouteWrapper component={SignIn} path="/login" exact />
                <Route component={() => <h1>Error 404</h1>} path="/" />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
