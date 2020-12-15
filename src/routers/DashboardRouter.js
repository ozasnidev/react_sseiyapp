import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import { GoldSaints } from '../components/saints/gold/goldSaints';
import { SilverSaints } from '../components/saints/silver/silverSaints';
import { BronzeSaints } from '../components/saints/bronze/bronzeSaints';
import { SaintsScreen } from '../components/saints/SaintsScreen';

export const DashboardRouter = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/goldsaints" component={ GoldSaints } />
                    <Route exact path="/silversaints" component={ SilverSaints } />
                    <Route exact path="/bronzesaints" component={ BronzeSaints } />
                    <Route exact path="/saint" component={ SaintsScreen } />
                    <Route exact path="/saint/:saintId" component={ SaintsScreen } />
                    <Redirect to="/saint" />
                </Switch>
            </div>
        </>
    )
}
