/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Banner from './BannerComponent';
import Idea from './IdeaComponent';
import AboutApp from './AboutAppComponent';
import Tech from './TechComponent';
import Team from './TeamComponent';
import LoginForm from './LoginComponent';
import RegisterForm from './RegisterComponent';
import UsersList from './UsersList';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={() => (
                            <div>
                                <Banner />
                                <Idea />
                                <AboutApp />
                                <Tech />
                                <Team />
                            </div>
                        )}
                    />
                    <Route path="/idea" component={Idea} />
                    <Route path="/aboutapp" component={AboutApp} />
                    <Route path="/tech" component={Tech} />
                    <Route exact path="/team" component={Team} />
                    <Route exact path="/login" component={LoginForm} />
                    <Route exact path="/register" component={RegisterForm} />
                    <Route exact path="/users" component={UsersList} />
                    <Redirect to="/" />
                </Switch>
                {
                    // <Footer />
                }
            </div>
        );
    }
}

export default Main;
