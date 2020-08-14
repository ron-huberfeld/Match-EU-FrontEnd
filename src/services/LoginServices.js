import http from '../utils/http-common';

const login = (email, password) => {
    return http.post('/login', {
        email,
        password,
    });
};

const register = (email, password) => {
    return http.post('/register', {
        email,
        password,
    });
};

export default {
    login,
    register,
};
