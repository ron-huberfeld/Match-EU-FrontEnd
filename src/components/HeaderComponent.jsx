/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
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
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert(
            `Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`
        );
        event.preventDefault();
    }

    render() {
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img
                                src="assets/images/logo.png"
                                height="30"
                                width="41"
                                alt="MatchEU"
                            />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/idea">
                                        <span className="fa fa-flash ml-4" />{' '}
                                        Idea
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        to="/aboutapp"
                                    >
                                        <span className="fa fa-info " />{' '}
                                        App
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/tech">
                                        <span className="fa fa-list" />{' '}
                                        Tech
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/team">
                                        <span className="fa fa-group" />{' '}
                                        Team
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg" />
                                        Login
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>MatchEU</h1>
                                <p>We present our MatchEU app for pupils.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal
                    isOpen={this.state.isModalOpen}
                    toggle={this.toggleModal}
                >
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    type="text"
                                    id="username"
                                    name="username"
                                    innerRef={(input) =>
                                        (this.username = input)
                                    }
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    type="password"
                                    id="password"
                                    name="password"
                                    innerRef={(input) =>
                                        (this.password = input)
                                    }
                                />
                            </FormGroup>
                            <FormGroup check>
                                <Input
                                    type="checkbox"
                                    name="remember"
                                    innerRef={(input) =>
                                        (this.remember = input)
                                    }
                                />
                                Remember Me
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

export default Header;
