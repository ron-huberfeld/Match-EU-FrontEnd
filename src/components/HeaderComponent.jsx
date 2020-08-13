/* eslint-disable no-alert */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import {
    Navbar,
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
import { Transition } from 'react-transition-group';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../resources/images/logo.jpg';

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
                        <Nav>
                            <Link className="nav-link" to="/">
                                <img
                                    src={logo}
                                    className="logo-nav"
                                    alt="MatchEU"
                                />
                            </Link>
                        </Nav>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav
                                variant="pills"
                                className="ml-auto"
                                // defaultActiveKey="/"
                            >
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
                                <NavItem>
                                    <NavLink className="nav-link" to="/login">
                                        <Button
                                            color="primary"
                                            // onClick={this.toggleModal}
                                        >
                                            <span className="fa fa-sign-in" />
                                            <strong>LOGIN</strong>
                                        </Button>
                                    </NavLink>
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

Collapse.contextTypes = {
    ...Transition.propTypes,
    isOpen: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.node,
    navbar: PropTypes.bool,
    color: PropTypes.string,
    timeout: PropTypes.number,
};

export default Header;
