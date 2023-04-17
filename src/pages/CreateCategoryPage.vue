<script>
import {mapActions} from "vuex";

export default {
    name: "CreateCategoryPage",
    data() {
        return {
            name: ''
        }
    },
    methods: {
        ...mapActions(['createCategory']),
        create() {
            console.log({name: this.name})
            this.createCategory({name: this.name})
                .then(() => {
                    this.$router.go()
                })
                .catch((e) => {
                    console.log(e.message)
                })
        }
    }
}
</script>

<template>
    <div>
        <h1>Create category</h1>
    </div>
    <div class="mb-3 col-12 col-md-8">
        <label for="category" class="form-label">Name</label>
        <input type="text" class="form-control" id="category" v-model="name"/>
    </div>
    <div class="d-flex justify-content-between">
        <button @click="create" type="submit" class="btn btn-success">Add</button>
    </div>
</template>

<style scoped>

</style>
