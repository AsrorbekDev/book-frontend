"use strict";

import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        pushFile(context, formData) {
            return new Promise((resolve, reject) => {
                axios.post('http://192.168.31.139:8081/api/media_objects', formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then((response) => {
                        console.log('Image uploaded')
                        console.log(response)

                        let picture = {
                            pictureId: response.data.id
                        }

                        context.commit('updateFile', picture)
                        resolve();
                    })
                    .catch((e) => {
                        console.log('Failed to upload image.')
                        console.log(e)
                        reject()
                    })
            })
        }
    },
    mutations: {
        updateFile(state, picture) {
            state.picture = picture
        }
    },
    state: {
        picture: {
            pictureId: null
        }
    },
    getters: {
        getFile(state) {
            return state.picture;
        }
    }
}