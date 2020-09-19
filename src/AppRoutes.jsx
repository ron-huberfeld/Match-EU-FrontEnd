import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppShell from './AppShell';
import LoginForm from './components/LoginComponent';
import RegisterForm from './components/RegisterComponent';
import AboutApp from './components/AboutAppComponent';
import Idea from './components/IdeaComponent';
import Tech from './components/TechComponent';
import Team from './components/TeamComponent';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import Users from './components/Users';
import FourOFour from './pages/FourOFour';

const AppRoutes = () => {
    return (
        <Switch>
            <Route path="/login">
                <LoginForm />
            </Route>
            <Route path="/register">
                <RegisterForm />
            </Route>
            <Route path="/idea">
                <Idea />
            </Route>
            <Route path="/aboutapp">
                <AboutApp />
            </Route>
            <Route path="/tech">
                <Tech />
            </Route>
            <Route path="/team">
                <Team />
            </Route>
            <Route exact path="/">
                <LandingPage />
            </Route>
            <Route path="/dashboard">
                <AppShell>
                    <Dashboard />
                </AppShell>
            </Route>
            <Route path="/users">
                <AppShell>
                    <Users />
                </AppShell>
            </Route>
            <Route path="*">
                <FourOFour />
            </Route>
        </Switch>
    );
};
export default AppRoutes;
