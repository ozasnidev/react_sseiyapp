import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { LoginScreen } from '../components/login/LoginScreen';
import { BronzeSaints } from '../components/saints/bronze/bronzeSaints';
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
                    <Navbar />
                    <Switch>
                        <Route exact path="/login" component={ LoginScreen } />
                        <Route exact path="/" component={ BronzeSaints } />                   
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
