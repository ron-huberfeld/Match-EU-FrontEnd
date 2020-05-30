/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';

function TestComponent() {
    return <span>Test</span>;
  }

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/idea" component={TestComponent} />
                    <Route path="/aboutapp" component={TestComponent} />
                    <Route path="/tech" component={TestComponent} />
                    <Route exact path="/team" component={TestComponent} />
                    <Redirect to="/idea" />
                </Switch>
                {
                    // <Footer />
                }
            </div>
        );
    }
}

export default Main;
