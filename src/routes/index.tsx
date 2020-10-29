import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RouteWrapper from './Route';

/* Screens */
import SignIn from '../pages/Login';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

function Routes() {
    return (
        <Switch>
            <RouteWrapper component={Home} path="/" exact />
            <RouteWrapper component={SignIn} path="/login" exact />
            <RouteWrapper component={Dashboard} path="/dashboard" exact isPrivate={true} />
            <RouteWrapper component={Profile} path="/my-profile" isPrivate={true} />

            <Route
                component={
                    () => <h1>Error 404</h1>
                }
                path="/" />
        </Switch>
    )
}

export default Routes;
