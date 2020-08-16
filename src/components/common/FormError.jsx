import React from 'react';
import PropTypes from 'prop-types';

const FormError = ({ text }) => (
    <section className="text-center p-2 mb-2 rounded border border-red-600 bg-red-100">
        <p className="text-xs text-red-500">{text}</p>
    </section>
);

FormError.propTypes = {
    text: PropTypes.string.isRequired,
};
export default FormError;
