/* eslint-disable no-alert */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
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
import banner from '../resources/images/screen6.png'

class Banner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubscribe = this.handleSubscribe.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }

    handleSubscribe(event) {
        this.toggleModal();
        if (this.email !== null && this.email !== undefined) {
            alert(`Email: ${this.email.value}`);
        }
        event.preventDefault();
    }

    render() {
        return (
            <>
                <Jumbotron
                    id="home"
                    className="section top_banner_bg secondary-bg"
                >
                    <div className="container">
                        <div className="row justify-content-around">
                            <div className="col-12 col-md-5">
                                <div className="present_img">
                                    <img
                                        src={banner}
                                        alt="Banner"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-7">
                                <div className="present">
                                    <h1>
                                        {' '}
                                        We present our MatchEU app for pupils.
                                    </h1>
                                    <p>
                                        Enter your <b>email</b> to subscribe to
                                        updates about our application
                                    </p>{' '}
                                    <Button
                                        color="success"
                                        className="btn btn-default btn-primary"
                                        type="submit"
                                        onClick={this.handleSubscribe}
                                        style={{
                                            fontSize: '20px',
                                            paddingTop: '0.5rem',
                                            paddingBottom: '0.5rem',
                                            paddingLeft: '1rem',
                                            paddingRight: '1rem',
                                        }}
                                    >
                                        {' '}
                                        <i
                                            className="fa fa-mobile"
                                            aria-hidden="true"
                                        />{' '}
                                        SUBSCRIBE To UPDATES
                                    </Button>{' '}
                                    <br />
                                    <br />
                                    <h3>
                                        {' '}
                                        See our <span>
                                            {' '}
                                            Presentation{' '}
                                        </span> for <b> matchEU Project</b>{' '}
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
                                                style={{
                                                    fontSize: '30px',
                                                    paddingTop: '0rem',
                                                    paddingBottom: '0rem',
                                                    paddingLeft: '1rem',
                                                    paddingRight: '1rem',
                                                }}
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
                                            <br />
                                            <a
                                                target="_blank"
                                                href="https://www.youtube.com/watch?v=rsC90eeg1dU&amp;feature=youtu.be"
                                            >
                                                {' '}
                                                <Button
                                                    className="btn btn-default"
                                                    type="submit"
                                                    style={{
                                                        fontSize: '30px',
                                                        paddingTop: '0rem',
                                                        paddingBottom: '0rem',
                                                        paddingLeft: '1rem',
                                                        paddingRight: '1rem',
                                                    }}
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

                <Modal
                    isOpen={this.state.isModalOpen}
                    toggle={this.toggleModal}
                >
                    <ModalHeader toggle={this.toggleModal}>
                        SUBSCRIBE
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubscribe}>
                            <FormGroup>
                                <Label htmlFor="email">
                                    Enter your email address to get latest
                                    updates on our project!
                                </Label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    innerRef={(input) => (this.email = input)}
                                />
                            </FormGroup>
                            <Button
                                type="submit"
                                name="submit"
                                color="primary"
                                className="mt-2"
                            >
                                Submit
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Banner;
