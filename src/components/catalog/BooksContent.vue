<script>
import {mapActions, mapGetters} from "vuex";
import ThePagination from "@/components/ThePagination.vue";

export default {
    name: "BooksContent",
    components: {ThePagination},
    computed: {
        ...mapGetters(['getBooks', 'getTotalBooks', 'getLoading']),
    },
    methods: {
        ...mapActions(['fetchBooks']),
    },
    mounted() {
        this.fetchBooks(this.$route.params.id);
    },
    watch: {
        '$route.params.id'() {
            console.log('Param changed to ID: ' + this.$route.params.id);
            this.fetchBooks(this.$route.params.id)
        }
    }
};
</script>

<template>
    <div class="row">
        <!--        <ProductSkeleton v-if="getLoading" />-->
        <div
                class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4"
                v-for="book in getBooks"
                :key="book.id"
        >
            <div class="card">
                <img
                        :src="'http://192.168.31.139:8081' + book.picture.contentUrl"
                        class="card-img-top"
                        style="max-height: 300px"
                        :alt="book.name"
                />
                <div class="card-body">
                    <h5 class="card-title title text-truncate">{{ book.name }}</h5>
                    <p class="card-text title text-truncate">
                        {{ book.description }}
                    </p>
                    <RouterLink :to="'/book/' + book.id" class="btn btn-primary">Read</RouterLink>
                </div>
            </div>
        </div>
    </div>
    <ThePagination v-show="getBooks.length"/>
</template>

<style scoped></style>
