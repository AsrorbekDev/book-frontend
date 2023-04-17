"use strict";

import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        createCategory(data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://192.168.31.139:8081/api/categories', data)
                    .then((response) => {
                        console.log('Category created.');
                        console.log(response);

                        resolve();
                    })
                    .catch((e) => {
                        console.log(e.message);
                        reject();
                    })
            });
        }
    },
}