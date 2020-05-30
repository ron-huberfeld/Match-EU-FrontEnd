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

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Banner} />
                    <Route path="/idea" component={Idea} />
                    <Route path="/aboutapp" component={AboutApp} />
                    <Route path="/tech" component={Tech} />
                    <Route exact path="/team" component={Team} />
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
