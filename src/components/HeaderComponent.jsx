import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavItem, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../resources/images/logo.jpg';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="md">
            <div className="container">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand>
                    <Link className="nav-link" to="/">
                        <img src={logo} className="logo-nav" alt="MatchEU" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
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
                            <NavLink className="nav-link" to="/aboutapp">
                                <span className="fa fa-mobile fa-lg " /> App
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
                                <span className="fa fa-lg fa-group" /> Team
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/register">
                                <Button color="outline-primary">Sign Up</Button>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/login">
                                <Button color="primary">
                                    <span className="fa fa-sign-in" />
                                    <strong>Log In</strong>
                                </Button>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Header;
