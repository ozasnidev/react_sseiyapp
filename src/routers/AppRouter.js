import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { DashboardRouter } from '../routers/DashboardRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';

export const AppRouter = () => {
    const {user} = useContext(AuthContext);
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/login" component={ LoginScreen } isAuthenticated = { user.isLogged } />
                    <PrivateRoute path="/" component={ DashboardRouter } isAuthenticated = { user.isLogged } />
                </Switch>
            </div>
        </Router>
    )
}
