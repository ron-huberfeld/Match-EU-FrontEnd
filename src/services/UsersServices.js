import publicFetch from '../utils/fetch';

const getAll = () => {
    return publicFetch.get('/users');
};

const get = (id) => {
    return publicFetch.get(`/users/${id}`);
};

const create = (data) => {
    return publicFetch.post('/users', data);
};

const update = (id, data) => {
    return publicFetch.put(`/users/${id}`, data);
};

const remove = (id) => {
    return publicFetch.delete(`/users/${id}`);
};

const findByName = (name) => {
    return publicFetch.get(`/users?name=${name}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    findByName,
};
