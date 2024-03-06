import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import DashboardPage from '../components/Dashboard';
import CreatePage from '../components/Create';
import EditPage from '../components/Edit';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/404';

const AppRouter = () => (
<BrowserRouter>
<div>
    <Header />
    <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/create" component={CreatePage} />
        <Route path="/edit/:id" component={EditPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
    </Switch>
</div>
</BrowserRouter>
);

export default AppRouter;