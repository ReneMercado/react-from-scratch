import axios from 'axios';

const instance = axios.create({
    baseURL: 'baseUrl.com/'
});

instance.defaults.headers.common["Authorization"] = "tokn";

export default instance;
