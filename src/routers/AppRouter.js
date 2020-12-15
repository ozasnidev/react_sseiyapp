import React from 'react';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouter } from '../routers/DashboardRouter';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/login" component={ LoginScreen } />
                        <Route path="/" component={ DashboardRouter } />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
