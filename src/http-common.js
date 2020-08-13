import axios from 'axios';

export default axios.create({
    baseURL: 'https://restful-matcheu.herokuapp.com/',
    headers: {
        'Content-type': 'application/json',
    },
});
