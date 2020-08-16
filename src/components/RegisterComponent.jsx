import React, { useState } from 'react';
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

const schema = yup.object().shape({
    firstName: yup.string(),
    lastName: yup.string(),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
});

const RegisterForm = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });
    const [signupSuccess, setSignupSuccess] = useState();
    const [signupError, setSignupError] = useState();
    const [redirectOnLogin, setRedirectOnLogin] = useState(false);
    const [loginLoading, setLoginLoading] = useState(false);
    const onSubmit = async (data) => {
        try {
            console.log(data);
            setLoginLoading(true);
            const { result } = await LoginServices.register(data);

            setSignupSuccess(data.message);
            setSignupError(null);

            setTimeout(() => {
                setRedirectOnLogin(true);
            }, 700);
        } catch (error) {
            setLoginLoading(false);
            console.log(error);
            const { errData } = error;
            setSignupError('Error occured');
            setSignupSuccess(null);
        }
    };

    return (
        <>
            {redirectOnLogin && <Redirect to="/dashboard" />}
            <section className="w-1/2 h-screen m-auto p-8 sm:pt-10">
                <GradientBar />
                <Card>
                    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-md w-full">
                            <div>
                                <div className="w-32 m-auto mb-6">
                                    <img src={logo} alt="Logo" />
                                </div>
                                <h2 className="mb-2 text-center text-3xl leading-9 font-extrabold text-gray-900">
                                    Sign up for an account
                                </h2>
                                <p className="text-gray-600 text-center">
                                    {'Already have an account? '}
                                    <Hyperlink to="login" text="Log in now" />
                                </p>
                            </div>
                            <form
                                className="mt-8"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                {signupSuccess && (
                                    <FormSuccess text={signupSuccess} />
                                )}
                                {signupError && (
                                    <FormError text={signupError} />
                                )}
                                <div>
                                    <div className="flex">
                                        <div className="mb-2 mr-2 w-1/2">
                                            <div className="mb-1">
                                                <Label text="First Name" />
                                            </div>
                                            <input
                                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                                ariaLabel="First Name"
                                                name="firstName"
                                                type="text"
                                                placeholder="First Name"
                                                ref={register}
                                            />
                                        </div>
                                        <div className="mb-2 ml-2 w-1/2">
                                            <div className="mb-1">
                                                <Label text="Last Name" />
                                            </div>
                                            <input
                                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                                ariaLabel="Last Name"
                                                name="lastName"
                                                type="text"
                                                placeholder="Last Name"
                                                ref={register}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="mb-1">
                                            <Label text="Email address" />
                                        </div>
                                        <input
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                            ariaLabel="Email address"
                                            name="email"
                                            type="email"
                                            placeholder="Email address"
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
                                            ariaLabel="Password"
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                            ref={register}
                                        />
                                        <p>{errors.password?.message}</p>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <GradientButton
                                        type="submit"
                                        text="Sign Up"
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

export default RegisterForm;
