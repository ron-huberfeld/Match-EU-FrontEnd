import React, { useState } from 'react';
import { Jumbotron, Button, Form, FormGroup, Input } from 'reactstrap';
import LoginServices from '../services/LoginServices';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        let result = await LoginServices.login(email, password);
        console.log(result);

        if (result.data.token) {
            window.localStorage.setItem('token', result.data.token);
            window.location.replace('/users');
        }
    };

    const handleLoginFailure = (response) => {
        alert('Failed to login');
    };

    return (
        <Jumbotron id="login" className="primary-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="section_heading">
                            <h2> Login </h2>
                            <Form onSubmit={handleLogin}>
                                <FormGroup>
                                    <Input
                                        id="email"
                                        placeholder="Email"
                                        onChange={(event) =>
                                            setEmail(event.target.value)
                                        }
                                        value={email}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                        value={password}
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
                                <p className="forgot-password text-right">
                                    <Link to="/register">Register?</Link>
                                </p>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Jumbotron>
    );
};

export default LoginForm;
