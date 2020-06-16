/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Jumbotron,
    Nav,
    NavbarToggler,
    Collapse,
    NavItem,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

class Tech extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Jumbotron
                id="technologies"
                className="section padding_bottom_none our_service_bg"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section_heading section_heading_2">
                                <h2> Tech we used </h2>
                            </div>

                            <div className="col-md-5 pull-right">
                                <div className="services_detail">
                                    <ul>
                                        <li>
                                            <span className="services_item">
                                                <i
                                                    className="fa fa-html5 icon"
                                                    aria-hidden="true"
                                                />
                                                <i
                                                    className="fa fa-css3 icon"
                                                    aria-hidden="true"
                                                />
                                                <i
                                                    className="fa fa-js icon"
                                                    aria-hidden="true"
                                                />
                                                <h5> Frontend side </h5>
                                            </span>
                                            <p>
                                                {' '}
                                                Frontend Side we have used HTML5
                                                CSS3 and JQuery.
                                            </p>
                                        </li>
                                        <li>
                                            <span className="services_item">
                                                <i
                                                    className="fa fa-desktop icon"
                                                    aria-hidden="true"
                                                />
                                                <h5> Backend side </h5>
                                            </span>
                                            <p>
                                                {' '}
                                                Backend Side we have used
                                                Python, Flask, Google Classroom
                                                APIs
                                            </p>
                                        </li>

                                        <li>
                                            <span className="services_item">
                                                <i
                                                    className="fa fa-database icon"
                                                    aria-hidden="true"
                                                />
                                                <h5> Deployment </h5>
                                            </span>
                                            <p>
                                                {' '}
                                                For deployment we have used
                                                Heroku and PostgreSQL.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-7 group-image">
                                <div className="services_img">
                                    <img
                                        src="assets/images/screen5.jpg"
                                        alt="App Prototype Screen 1"
                                    />
                                </div>

                                <div className="services_img_n">
                                    <img
                                        src="assets/images/screen4.jpg"
                                        alt="App Prototype Screen 2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    }
}

export default Tech;
