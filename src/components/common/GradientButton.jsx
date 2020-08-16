/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

const GradientButton = ({ inputType, text, size, loading, onClick }) => {
    const classes = classNames({
        'flex rounded-full items-center py-2 px-6 bg-gradient focus:outline-none shadow-lg text-white': true,
        'text-2xl': size === 'lg',
    });
    return (
        <button type={inputType} className={classes} onClick={onClick}>
            {loading ? (
                <span className="flex items-center">
                    <FontAwesomeIcon icon={faCircleNotch} spin />
                    <span className="ml-2">Loading...</span>
                </span>
            ) : (
                <span>{text}</span>
            )}
        </button>
    );
};

export default GradientButton;
