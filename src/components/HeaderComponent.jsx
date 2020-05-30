/* eslint-disable no-alert */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
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
                <Navbar light expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img
                                src="assets/images/logo.jpg"
                                height="60"
                                width="120"
                                alt="MatchEU"
                            />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/idea">
                                        <span className="fa fa-rocket fa-lg ml-4" />{' '}
                                        Idea
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        to="/aboutapp"
                                    >
                                        <span className="fa fa-mobile fa-lg " />{' '}
                                        App
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/tech">
                                        <span className="fa fa-cog fa-spin fa-lg" />{' '}
                                        Tech
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/team">
                                        <span className="fa fa-lg fa-group" />{' '}
                                        Team
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button
                                        className="btn"
                                        outline
                                        onClick={this.toggleModal}
                                    >
                                        <span className="fa fa-sign-in" />
                                        {'  '}
                                        LOGIN
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
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
