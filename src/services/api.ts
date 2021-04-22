import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://ir-bolsa-api.herokuapp.com/api/v1',
});

export default api;