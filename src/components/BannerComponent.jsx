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

class Banner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Jumbotron id="home" className="section top_banner_bg secondary-bg">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-md-5 ">
                            <div className="present_img">
                                <img
                                    src="assets/images/screen6.png"
                                    alt="Banner"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="present">
                                <h1> We present our MatchEU app for pupils.</h1>
                                <p>
                                    Enter your <b>email</b> to subscribe to
                                    updates about our application
                                </p>
                                <br />
                                <h3>
                                    {' '}
                                    See our <span> Presentation </span> for{' '}
                                    <b> MATCH EU Project</b>{' '}
                                </h3>

                                <div className="section_btn">
                                    <a
                                        target="_blank"
                                        href="https://matcheu.uaweb.site/prototypes"
                                    >
                                        {' '}
                                        <Button
                                            className="btn btn-default"
                                            type="submit"
                                        >
                                            {' '}
                                            <i
                                                className="fa fa-mobile"
                                                aria-hidden="true"
                                            />{' '}
                                            PROTOTYPES
                                        </Button>{' '}
                                    </a>

                                    <span>
                                        {' '}
                                        <a
                                            target="_blank"
                                            href="https://www.youtube.com/watch?v=rsC90eeg1dU&amp;feature=youtu.be"
                                        >
                                            {' '}
                                            <Button
                                                className="btn btn-default"
                                                type="submit"
                                            >
                                                <i
                                                    className="fa fa-youtube"
                                                    aria-hidden="true"
                                                />{' '}
                                                Presentation
                                            </Button>{' '}
                                        </a>{' '}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    }
}

export default Banner;
