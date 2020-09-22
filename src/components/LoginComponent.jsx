import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import LoginServices from '../services/LoginServices';
import logo from '../resources/images/logo.jpg';
import Card from './common/Card';
import GradientBar from './common/GradientBar';
import Hyperlink from './common/Hyperlink';
import GradientButton from './common/GradientButton';
import Label from './common/Label';
import FormSuccess from './common/FormSuccess';
import FormError from './common/FormError';
import { AuthContext } from '../context/AuthContext';

const schema = yup.object().shape({
    email: yup.string().email('Invalid E-mail.').required('Email is required'),
    password: yup.string().required('Password is required'),
});

const LoginForm = () => {
    const authContext = useContext(AuthContext);
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });
    const [loginSuccess, setLoginSuccess] = useState();
    const [loginError, setLoginError] = useState();
    const [loginLoading, setLoginLoading] = useState(false);
    const [redirectOnLogin, setRedirectOnLogin] = useState(false);

    const onSubmit = async (credentials) => {
        try {
            setLoginLoading(true);
            const { data } = await LoginServices.login(credentials);
            authContext.setAuthState(data);
            setLoginSuccess(data.message);
            setLoginError(null);

            setTimeout(() => {
                setRedirectOnLogin(true);
            }, 700);
        } catch (error) {
            setLoginLoading(false);
            const resMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            setLoginError(resMessage);
            setLoginSuccess(null);
        }
    };

    return (
        <>
            {redirectOnLogin && <Redirect to="/dashboard" />}
            <section className="w-full sm:w-1/2 h-screen m-auto p-8 sm:pt-10">
                <GradientBar />
                <Card>
                    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-md w-full">
                            <div className="logo-nav w-32 m-auto mb-6">
                                <img src={logo} alt="Logo" />
                            </div>
                            <h2 className="mb-2 text-center text-3xl leading-9 font-extrabold text-gray-900">
                                Log in to your account
                            </h2>
                            <p className="text-gray-600 text-center">
                                {`Don't have an account? `}
                                <Hyperlink to="register" text="Sign up now" />
                            </p>
                            <form
                                className="mt-8"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                {loginSuccess && (
                                    <FormSuccess text={loginSuccess} />
                                )}
                                {loginError && <FormError text={loginError} />}
                                <div>
                                    <div className="mb-2">
                                        <div className="mb-1">
                                            <Label text="Email" />
                                        </div>
                                        <input
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                            type="text"
                                            name="email"
                                            placeholder="Email"
                                            ref={register}
                                        />
                                        <p>{errors.email?.message}</p>
                                    </div>
                                    <div>
                                        <div className="mb-1">
                                            <Label text="Password" />
                                        </div>
                                        <input
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                            ref={register}
                                        />
                                        <p>{errors.password?.message}</p>
                                    </div>
                                </div>

                                <div className="mt-6 flex justify-start">
                                    <div className="text-sm leading-5">
                                        <Hyperlink
                                            to="forgot-password"
                                            text="Forgot your password?"
                                        />
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <GradientButton
                                        type="submit"
                                        text="Log In"
                                        loading={loginLoading}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </Card>
            </section>
        </>
    );
};

export default LoginForm;
