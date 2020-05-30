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

class Idea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Jumbotron id="idea" class="primary-bg idea">
                <div className="container">
                    <div className="row">
                        <div className="section_heading">
                            <h2> Our IDEA </h2>

                            <h4>
                                {' '}
                                We decided to create an app for pupils aging
                                12-17 who are struggling with lack of motivation
                                in homeschooling caused by the current lockdown,
                                matchEU is a platform that matches tandems and
                                mentorships cross-border to ensure the
                                opportunity for a holistic education and keeping
                                on track for every pupil.
                            </h4>
                        </div>

                        <div className="col-md-6">
                            <div className="features_detail">
                                <ul>
                                    <li>
                                        <div className="circle">
                                            <img
                                                className="smaller"
                                                src="assets/images/icon1.png"
                                                alt=""
                                            />
                                        </div>
                                        <h5>Connect</h5>
                                        Cross-border within whole EU.
                                    </li>

                                    <li>
                                        <div className="circle right">
                                            <img
                                                className="smaller"
                                                src="assets/images/icon2.png"
                                                alt=""
                                            />
                                        </div>
                                        <h5>Match</h5>
                                        With tandem, mentor or partner.
                                    </li>

                                    <li>
                                        <div className="circle">
                                            <img
                                                className="smaller"
                                                src="assets/images/icon3.png"
                                                alt=""
                                            />
                                        </div>
                                        <h5>Identify</h5>
                                        Foster european solidarity.
                                    </li>

                                    <li>
                                        <div className="circle right">
                                            <img
                                                className="smaller"
                                                src="assets/images/icon4.png"
                                                alt=""
                                            />
                                        </div>
                                        <h5> Motivate </h5>
                                        Exchange useful advice to stay
                                        motivated.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="features_img pull-left">
                                <img
                                    src="assets/images/flag-map.svg.png"
                                    alt="EU Map"
                                    className="EUmap"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    }
}

export default Idea;
