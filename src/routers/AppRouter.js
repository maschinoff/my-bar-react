import React from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage';

import AddDrinkPage from '../components/AddDrinkPage';
import EditDrinkPage from '../components/EditDrinkPage';
import DetailedViewPage from '../components/DetailedViewPage';

import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

export const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute exact path="/" component={LoginPage} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/create" component={AddDrinkPage} />
                <PrivateRoute path="/view/:id" component={DetailedViewPage}/>
                <PrivateRoute path="/edit/:id" component={EditDrinkPage}/>
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;