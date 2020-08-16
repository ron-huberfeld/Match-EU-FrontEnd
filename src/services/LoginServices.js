import publicFetch from '../utils/fetch';

const login = (email, password) => {
    return publicFetch.post('/login', {
        email,
        password,
    });
};

const register = (email, password) => {
    return publicFetch.post('/register', {
        email,
        password,
    });
};

export default {
    login,
    register,
};
