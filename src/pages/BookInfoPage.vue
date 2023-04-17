<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "BookInfoPage",
    methods: {
        ...mapActions(['fetchBook'])
    },
    computed: {
        ...mapGetters(['getBook','getReset'])
    },
    mounted() {
        this.fetchBook(this.$route.params.id)
    },
};
</script>

<template>
    <div class="col-12 col-md-10 mt-4 mt-md-0">
        <div class="card">
            <div class="card-header">
                {{ getBook.name }}
            </div>
            <div class="card-body">
                <img class="rounded mx-auto d-block mb-2"
                     style="max-height: 280px"
                     :src="'http://localhost:8081' + getBook.picture"
                     :alt="getBook.name">
                <blockquote class="blockquote mb-0">
                    <p>{{ getBook.description }}</p>
                </blockquote>
            </div>
        </div>
        <RouterLink class="btn btn-primary mb-2 mt-2" to="/">Back</RouterLink>
    </div>
</template>

<style scoped></style>
