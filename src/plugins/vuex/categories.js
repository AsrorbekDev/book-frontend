"use strict";

import axios from "./axios";

export default {
    actions: {
        fetchCategories(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://192.168.31.139:8081/api/categories')
                    .then((response) => {
                        console.log('Categories got.');
                        console.log(response);

                        let categories = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems'],
                        };

                        context.commit('updateCategories', categories);
                        resolve();
                    })
                    .catch(() => {
                        console.log('Failed to get categories.');
                        reject();
                    })
            })
        },
    },
    mutations: {
        updateCategories(state, categories) {
            state.categories = categories;
        },
    },
    state: {
        categories: {
            models: [],
            totalItems: 0,
        },
    },
    getters: {
        getCategories(state) {
            return state.categories.models;
        },
        getTotalCategories(state) {
            return state.categories.totalItems;
        }
    }

}