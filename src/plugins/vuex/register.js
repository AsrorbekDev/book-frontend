"use strict";

import axios from "./axios";

export default {
    actions: {
        createUser(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://192.168.31.139:8081/api/users/my', data)
                    .then((response) => {
                        console.log('User registered.');
                        console.log(response);

                        let data = {
                            id: response.data.id,
                            email: response.data.email,
                        }

                        context.commit('updateCreateUser', data);
                        resolve();
                    })
                    .catch(() => {
                        console.log('Failed to register user.');
                        reject();
                    })
            })
        }
    },
    mutations: {
        updateCreateUser(state, data) {
            state.createdUser = data;
        }
    },
    state: {
        createdUser: {
            id: null,
            email: '',
        },
    },
    getters: {
        getCreatedUser(state) {
            return state.createdUser;
        }
    }
}