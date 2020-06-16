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

class AboutApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Jumbotron id="about" className="primary-bg">
                <div className="container">
                    <div className="row ordered">
                        <div className="section_heading">
                            <h2> About App </h2>
                            <h4>
                                {' '}
                                EU offers a matching platform to empower each
                                student on the learning journey. fostering the
                                pan-european solidarity.
                            </h4>
                        </div>

                        <div className="col-md-4">
                            <div className="how_it_work_m text-right">
                                <span className="how_it_work_item">
                                    <h5>Search for a Mentor</h5>
                                    <i
                                        className="fa fa-search"
                                        aria-hidden="true"
                                    />
                                </span>
                                <p>
                                    Match your needs with other students who are
                                    on the same situation or search for a
                                    mentor. The application would be showing
                                    qualified people according to your needs.
                                </p>
                            </div>

                            <div className="how_it_work_m text-right">
                                <span className="how_it_work_item">
                                    <h5> Chat & Communicate </h5>
                                    <i
                                        className="fa fa-comments"
                                        aria-hidden="true"
                                    />
                                </span>
                                <p>
                                    {' '}
                                    Connect with others, find your friend and
                                    mentor. You will not be alone, you will be
                                    among other European pupils, you friends.
                                    Let&apos;s create create an awesome
                                    community!{' '}
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 ">
                            <div className="workng_img">
                                <img
                                    src="assets/images/screen1.png"
                                    alt="App Prototype"
                                />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="how_it_work_m text-left">
                                <span className="how_it_work_item">
                                    <i
                                        className="fa fa-lightbulb-o"
                                        aria-hidden="true"
                                    />
                                    <h5>Challenges </h5>
                                </span>
                                <p>
                                    {' '}
                                    Prove yourself and the community, we offer a
                                    fun way of learning, which will keep you and
                                    yours motivate!
                                </p>
                            </div>

                            <div className="how_it_work_m text-left">
                                <span className="how_it_work_item">
                                    <i
                                        className="fa fa-desktop"
                                        aria-hidden="true"
                                    />
                                    <h5> Tutorials </h5>
                                </span>
                                <p>
                                    {' '}
                                    Looking forward to become a mentor? Go
                                    through our tutorials and get prepare! You
                                    can start your learning journey with other
                                    students.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    }
}

export default AboutApp;
