"use strict";

import {createStore} from "vuex";
import login from "@/plugins/vuex/login";
import register from "@/plugins/vuex/register";
import books from "@/plugins/vuex/books";
import categories from "@/plugins/vuex/categories";
import createCategory from "@/plugins/vuex/createCategory";
import createMediaObject from "@/plugins/vuex/createMediaObject";

export default createStore({
    modules: {
        login,
        register,
        books,
        categories,
        createCategory,
        createMediaObject
    }
})