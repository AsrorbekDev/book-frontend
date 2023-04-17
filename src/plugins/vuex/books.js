"use strict";

import axios from "./axios";

export default {
    actions: {
        fetchBooks(context, categoryId = null) {

            let categoryUrl = '';
            if (categoryId) {
                categoryUrl = '&category=' + categoryId;
            }
            context.commit('setLoading', true);
            return new Promise((resolve, reject) => {
                axios
                    .get('http://192.168.31.139:8081/api/books?pagination=true&category=' + categoryUrl)
                    .then((response) => {
                        console.log('Books got.');
                        console.log(response);

                        let books = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems'],
                        }

                        context.commit('updateBooks', books);
                        context.commit('setLoading', false)
                        resolve();
                    })
                    .catch(() => {
                        console.log('Failed to get books.');
                        reject();
                    })
                    .finally(() => {
                        context.commit('setLoading', false);
                    })
            })
        },
        fetchBook(context, bookId = null) {
            context.commit('setLoading', true);
            return new Promise((resolve, reject) => {
                axios
                    .get('http://192.168.31.139:8081/api/books/' + bookId)
                    .then((response) => {
                        console.log('Book got.');
                        console.log(response);

                        let book = {
                            id: response.data.id,
                            name: response.data.name,
                            description: response.data.description,
                            text: response.data.text,
                            category: response.data.category,
                            picture: response.data.picture,
                        }

                        context.commit('updateBook', book);
                        context.commit('setLoading', false)
                        resolve();
                    })
                    .catch(() => {
                        console.log('Failed to get book.');
                        reject();
                    })
                    .finally(() => {
                        context.commit('setLoading', false);
                    })
            })
        },
        createBook(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('http://192.168.31.139:8081/api/books', data)
                    .then((response) => {
                        console.log('Book created')
                        console.log(response)

                        resolve();
                    })
                    .catch((e) => {
                        console.log("Failed to create a book.")
                        console.log(e)
                        reject();
                    })
            })
        }
    },
    mutations: {
        updateBooks(state, books) {
            state.books = books;
        },
        updateBook(state, book) {
            state.book = book;
        },
        setLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
    },
    state: {
        books: {
            models: [],
            totalItems: 0,
        },
        book: {
            id: null,
            name: null,
            description: null,
            text: null,
            category: null,
            picture: null,
        },
        isLoading: false,
    },
    getters: {
        getBooks(state) {
            return state.books.models;
        },
        getBook(state) {
            return state.book;
        },
        getTotalBooks(state) {
            return state.books.totalItems;
        },
        getLoading(state) {
            return state.isLoading;
        }
    }
}