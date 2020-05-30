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

class Team extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Jumbotron id="team" class="primary-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section_heading">
                                <h2> Team Members </h2>

                                <h4>
                                    We&apos;re the best international team,
                                    keeping connected and communicated to make
                                    things happen!{' '}
                                </h4>
                            </div>
                            <div className="owl-carousel owl-theme">
                                <div className="card">
                                    <div className="member_img">
                                        <img
                                            src="assets/images/Team1.jpg"
                                            alt="Oleksa Mara"
                                        />
                                    </div>
                                    <div className="member_name">
                                        <h5> Oleksa Mara</h5>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="member_img">
                                        <img
                                            src="assets/images/Team2.jpg"
                                            alt="Nathalie Haußmann"
                                        />
                                    </div>
                                    <div className="member_name">
                                        <h5> Nathalie Haußmann</h5>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="member_img">
                                        <img
                                            src="assets/images/Team3.jpg"
                                            alt="Marko Shiva Pavlovic"
                                        />
                                    </div>
                                    <div className="member_name">
                                        <h5> Marko Shiva Pavlovic </h5>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="member_img">
                                        <img
                                            src="assets/images/Team4.jpg"
                                            alt="Diana Andone"
                                        />
                                    </div>
                                    <div className="member_name">
                                        <h5> Diana Andone </h5>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="member_img">
                                        <img
                                            src="assets/images/Team5.jpg"
                                            alt="Nastja Gatsenko"
                                        />
                                    </div>
                                    <div className="member_name">
                                        <h5> Nastja Gatsenko </h5>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="member_img">
                                        <img
                                            src="assets/images/Team.jpg"
                                            alt="Misrah Mohamed"
                                        />
                                    </div>
                                    <div className="member_name">
                                        <h5>Misrah Mohamed</h5>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="member_img">
                                        <img
                                            src="assets/images/Team6.jpg"
                                            alt="Isabel Arens"
                                        />
                                    </div>
                                    <div className="member_name">
                                        <h5> Isabel Arens </h5>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="member_img">
                                        <img
                                            src="assets/images/Team7.jpg"
                                            alt="Paula Rodriguez"
                                        />
                                    </div>
                                    <div className="member_name">
                                        <h5> Paula Rodriguez </h5>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="member_img">
                                        <img
                                            src="assets/images/Team8.jpg"
                                            alt="Olha Onofriichuk"
                                        />
                                    </div>
                                    <div className="member_name">
                                        <h5> Olha Onofriichuk</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    }
}

export default Team;
