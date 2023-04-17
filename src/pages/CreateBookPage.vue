<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "createBook",
    data() {
        return {
            book: {
                name: '',
                description: '',
                text: '',
                category: '',
                picture: '',
            },
            isLoading: false,
            file: ''
        }
    },
    computed: {
        ...mapGetters(['getCategories', 'getFile'])
    },
    methods: {
        ...mapActions(['fetchCategories', 'pushFile', 'createBook']),
        fileUpload() {
            console.log(this.$refs.file.files, 'This is picture');
            this.file = this.$refs.file.files[0]
        },
        addBook() {
            this.isLoading = true;
            let formData = new FormData();
            formData.append('file', this.file);
            this.pushFile(formData)
                .then(() => {
                    this.book.picture = '/api/media_objects/' + this.getFile.pictureId
                    this.createBook(this.book)
                    this.$router.push('/')
                })
                .catch((e) => {
                    console.log(e)
                })
                .finally(() => {
                    this.isLoading = false;
                })
        }
    },

}
</script>

<template>
    <div class="row">
        <div>
            <h1>Create book</h1>
        </div>
        <div class="col-12 col-md-8">
            <input v-model="book.name" type="text" class="form-control mb-3" placeholder="Book name">
            <input v-model="book.description" type="text" class="form-control mb-3" placeholder="Book description">
            <textarea v-model="book.text" rows="5" class="form-control mb-3" placeholder="Book text"/>
            <select v-model="book.category" class="form-control mb-3">
                <option value="">Select category</option>
                <option
                        v-for="category in getCategories"
                        :key="category.id"
                        :value="category['@id']"
                >
                    {{ category.name }}
                </option>
            </select>
            <input @change="fileUpload" ref="file" type="file" class="form-control mb-3">
        </div>
        <div>
            <button @click="addBook" type="submit" class="btn btn-success">
                <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status"></span>
                <span v-else>Create book</span>
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>
