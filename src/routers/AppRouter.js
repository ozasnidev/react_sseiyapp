import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouter } from '../routers/DashboardRouter';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
    const {user} = useContext(AuthContext);
    return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/login" component={ LoginScreen } />
                        <PrivateRoute path="/" component={ DashboardRouter } isAuthenticated = {user.isLogged} />
                    </Switch>
                </div>
            </Router>
    )
}
