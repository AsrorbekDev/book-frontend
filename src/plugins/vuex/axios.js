"use strict";

const axios = require("axios");
import store from "./store";

axios.defaults.headers.common["Content-Type"] = 'application/json';

axios.interceptors.request.use((config) => {
    if (config.url !== 'http://192.168.31.139:8081/api/users/auth') {
        config.headers.Authorization = 'bearer ' + store.getters.getToken;
    }

    return config;
})

export default axios;