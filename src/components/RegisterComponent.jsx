import React, { useState } from 'react';
import { Jumbotron, Button, Form, FormGroup, Input } from 'reactstrap';
import LoginServices from '../services/LoginServices';

const RegisterForm = () => {
    const [fullName, setFullName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(`Register: ${email} ${password}`);
        try {
            let result = LoginServices.register(email, password);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Jumbotron id="register" className="primary-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="section_heading">
                            <h2> Registration </h2>

                            <Form onSubmit={handleRegister}>
                                <FormGroup>
                                    <Input
                                        id="fullName"
                                        placeholder="Full Name"
                                        onChange={(event) =>
                                            setFullName(event.target.value)
                                        }
                                        value={fullName}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        id="username"
                                        placeholder="Username"
                                        onChange={(event) =>
                                            setUserName(event.target.value)
                                        }
                                        value={username}
                                    />
                                </FormGroup>
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
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Jumbotron>
    );
};

export default RegisterForm;
