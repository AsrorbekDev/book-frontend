"use strict";

import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/categories/:id(\\d+)',
        name: 'categories',
        component: HomePage,
    },
    {
        path: '/book/:id(\\d+)',
        name: 'book',
        component: () => import('../pages/BookInfoPage.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/LoginPage.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../pages/RegisterPage.vue'),
    },
    {
        path: '/create-category',
        name: 'createCategory',
        component: () => import('../pages/CreateCategoryPage.vue'),
    },
    {
        path: '/create-book',
        name: 'createBook',
        component: () => import('../pages/CreateBookPage.vue'),
    },
    {
        path: '/:catchAll(.*)',
        name: 'notFound',
        component: NotFoundPage,
    },

];

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes,
});

export default router;
