/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Header from './HeaderComponent';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Header />;
    }
}

export default Main;
