import publicFetch from '../utils/fetch';

const login = (data) => {
    return publicFetch.post('login', {
        data,
    });
};

const register = (data) => {
    return publicFetch.post('register', {
        data,
    });
};

export default {
    login,
    register,
};
