"use strict";

import axios from "./axios";

export default {
    actions: {
        fetchToken(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://192.168.31.139:8081/api/users/auth', data)
                    .then((response) => {
                        console.log('Token got.');
                        console.log(response);

                        context.commit('updateToken', response.data.token);
                        resolve();
                    })
                    .catch(() => {
                        console.log('Failed to get token.');
                        reject();
                    })
                    .finally(() => {
                        console.log('Finished auth');
                    })
            })
        }
    },
    mutations: {
        updateToken(state, token) {
            localStorage.setItem('token', token);
            state.token = token;
        }
    },
    state: {
        token: localStorage.getItem('token'),
    },
    getters: {
        getToken(state) {
            return state.token;
        }
    }
}